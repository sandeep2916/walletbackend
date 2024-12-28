import { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance.";
import { Users } from "../components/User";
import {
  loggedInState,
  userState,
  accountState,
  tokenState,
} from "../atoms/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { Nlgin } from "../components/NotLoggedINN";

export const Dashboard = () => {
  const loggedIn = useRecoilValue(loggedInState);
  const [usrState, setUserState] = useRecoilState(userState);
  const [acntState, setAcntState] = useRecoilState(accountState);
  const token = useRecoilValue(tokenState);
  const [firstl, setFirstL] = useState("");

  useEffect(() => {
    if (loggedIn) {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/api/v1/user/getinfo",
        headers: {
          Authorization: token,
        },
      };

      axios
        .request(config)
        .then((response) => {
          setUserState(response.data.user);
          const t = response.data.user.firstName[0].toUpperCase();
          setFirstL(t);
        })
        .catch((error) => {
          console.log(error);
        });
      let config2 = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/api/v1/account/balance",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .request(config2)
        .then((response) => {
          setAcntState(response.data.account);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div>
      {loggedIn ? (
        <Main
          firstL={firstl}
          firstName={usrState.firstName}
          balance={acntState.balance}
        />
      ) : (
        <Nlgin />
      )}
    </div>
  );
};

const Main = ({ firstL, firstName, balance }) => {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((res) => {
        setUsers(res.data.user);
      });
  }, [filter]);

  return (
    <div>
      <Appbar firstL={firstL} firstName={firstName} />
      <hr></hr>
      <Balance bal={balance} />
      <div className="mt-5">
        <Heading name="Users"></Heading>
        <div className="text-center mt-6">
          <input
            type="text"
            placeholder="Search users..."
            className="border-2 border-slate-400 p-2 w-11/12 rounded-lg ml-3"
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div>
        {users.map((user, idx) => {
          return <Users user={user} key={idx} />;
        })}
      </div>
    </div>
  );
};
