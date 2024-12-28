import { ProfilePicture } from "./ProfilePicture";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import {
  sendingUserState,
  userState,
  accountState,
  recievingUserState,
} from "../atoms/atoms";
import { useRecoilState } from "recoil";
import axios from "axios";

export const Users = ({ user }) => {
  const [sending, setSendingState] = useRecoilState(sendingUserState);
  const [usrState, setUserState] = useRecoilState(userState);
  const [acntState, setAcntState] = useRecoilState(accountState);
  const [rec, setRec] = useRecoilState(recievingUserState);

  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center mx-2 my-2 shadow-md px-2 rounded-lg">
      <div className="flex justify-between ml-5 items-center">
        <ProfilePicture firstletter={user.firstName[0].toUpperCase()} />
        <div className="mx-5 font-semibold text-xl">
          {user.firstName + " " + user.lastName}
        </div>
      </div>
      <Button
        name="Send Money"
        onClick={() => {
          navigate("/send");
          setSendingState(user.firstName);
          setRec(user._id);
        }}
      />
    </div>
  );
};
