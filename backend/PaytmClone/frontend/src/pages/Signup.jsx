import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const navigate = useNavigate();
  const [first, setFirst] = useState("");
  const [last, setlast] = useState("");
  const [pass, setPass] = useState("");
  const [email, setMail] = useState("");

  return (
    <div className="flex flex-col w-1/4 items-center shadow-lg px-10 py-4 rounded-2xl mx-auto my-20">
      <Heading name="Sign Up" />
      <SubHeading name="Enter your information to create an account" />
      <div>
        <InputBox
          name="First name"
          placeh="Enter your first name"
          type="text"
          onChange={(e) => {
            setFirst(e.target.value);
          }}
        />
        <InputBox
          name="Last name"
          placeh="Enter your last name"
          type="text"
          onChange={(e) => {
            setlast(e.target.value);
          }}
        />
        <InputBox
          name="Email"
          placeh="Enter your email"
          type="text"
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <InputBox
          name="Password"
          placeh="Enter your password"
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
      </div>
      <Button
        name="Sign Up"
        onClick={() => {
          axios
            .post("http://localhost:3000/api/v1/user/signup", {
              username: email,
              password: pass,
              firstName: first,
              lastName: last,
            })
            .then((res) => {
              alert(res.data.message + " You can login now");
            })
            .catch((err) => {
              alert(err.response.data.message);
            });
        }}
      />
      <ButtonWarning
        name="Already have an account?"
        warning="Login"
        navigate={navigate}
        to="/signin"
      />
    </div>
  );
};
