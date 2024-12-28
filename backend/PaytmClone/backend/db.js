const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://pritam12f:PpyVCO133CJ5805u@cluster0.w5m2bxm.mongodb.net/paytm");

const userSchema=mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 30,
        minLength: 6,
        trim: true,
        unique: true,
        lowercase: true
    },
    password : {
        type: String,
        required: true,
        minLength: 6
    },
    firstName : {
        type: String,
        trim: true,
        required: true,
        maxLength: 50,
    },
    lastName : {
        type: String,
        trim: true,
        required: true,
        maxLength: 50,
    }
});

const accountSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    balance: {type: Number, required: true}
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports={User, Account}