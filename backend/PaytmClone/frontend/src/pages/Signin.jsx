import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import axios from "axios";
import { tokenState, loggedInState } from "../atoms/atoms";
import { useSetRecoilState } from "recoil";

export const Signin = () => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const setToken = useSetRecoilState(tokenState);
  const setLoggedIn = useSetRecoilState(loggedInState);

  return (
    <div className="flex flex-col w-1/4 items-center shadow-lg px-10 py-4 rounded-2xl mx-auto my-20">
      <Heading name="Sign In" />
      <SubHeading name="Enter your credentials to access your account" />
      <InputBox
        name="Email"
        placeh="Enter your email"
        type="text"
        onChange={(e) => {
          setMail(e.target.value);
        }}
      ></InputBox>
      <InputBox
        name="Password"
        placeh="Enter your password"
        type="password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      ></InputBox>
      <Button
        name="Sign In"
        onClick={() => {
          axios
            .post("http://localhost:3000/api/v1/user/signin", {
              username: mail,
              password: pass,
            })
            .then((res) => {
              navigate("/dashboard");
              localStorage.setItem("token", `Bearer ${res.data.token}`);
              setToken(res.data.token);
              setLoggedIn(true);
            })
            .catch((err) => {
              alert(err.response.data.message);
            });
        }}
      />
      <ButtonWarning
        name="Don't have an account yet ?"
        warning="Sign Up"
        navigate={navigate}
        to="/signup"
      />
    </div>
  );
};
