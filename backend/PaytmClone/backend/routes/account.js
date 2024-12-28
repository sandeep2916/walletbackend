const express = require("express");
const { Account } = require("../db");
const { authMiddleware } = require("../middleware");
const router = express.Router();
const z = require("zod");
const mongoose = require("mongoose");

router.get("/balance", authMiddleware, async (req, res) => {
  const user = await Account.findOne({
    userId: req.userId,
  });

  return res.json({
    account: user,
  });
});

const transferBody = z.object({
  to: z.string(),
  amount: z.number(),
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  //Start the transaction
  session.startTransaction();
  const { success } = transferBody.safeParse(req.body);

  if (!success) {
    await session.abortTransaction();
    return res.json({
      message: "Invalid inputs",
    });
  }

  const user = await Account.findOne({
    userId: req.userId,
  }).session(session);

  if (user.balance < req.body.amount) {
    await session.abortTransaction();
    return res.json({
      message: "Insufficient balance",
    });
  }
  let transferAccount;
  try {
    transferAccount = await Account.findOne({
      userId: req.body.to,
    }).session(session);
  } catch (e) {
    await session.abortTransaction();
    return res.json({
      message: "Invalid account",
    });
  }

  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -req.body.amount } }
  ).session(session);
  await Account.updateOne(
    { userId: req.body.to },
    { $inc: { balance: req.body.amount } }
  ).session(session);

  //Commit the transaction
  await session.commitTransaction();

  return res.json({
    message: "Transfer was successful",
  });
});

module.exports = router;
