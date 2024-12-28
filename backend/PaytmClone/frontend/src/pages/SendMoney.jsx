import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { sendingUserState, recievingUserState } from "../atoms/atoms";
import { useRecoilValue } from "recoil";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export const SendMoney = () => {
  const friendName = useRecoilValue(sendingUserState);
  const recv = useRecoilValue(recievingUserState);
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  return (
    <div className="border-2 mt-10 w-1/5 px-4 py-8 text-center mx-auto rounded-lg shadow-lg">
      <div>
        <Heading name="Send Money" />
      </div>
      <div className="flex my-10 justify-center">
        <span className="h-10 w-10 rounded-full bg-green-400 flex justify-center items-center font-semibold text-lg mx-4">
          {friendName[0].toUpperCase()}
        </span>
        <span className="font-bold text-3xl">{friendName}</span>
      </div>
      <div className="text-md font-semibold my-5">Amount (in Rs.)</div>
      <InputBox type="text" placeh="Enter amount" onChange={(e)=>{
        setAmount(parseInt(e.target.value));
      }}/>
      <button
        className="bg-green-500 py-2 px-20 rounded-lg text-white my-5"
        onClick={() => {
          let data = JSON.stringify({
            "to": recv,
            "amount": amount
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/v1/account/transfer',
            headers: { 
              'Authorization': localStorage.getItem('token'), 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            console.log(response.data);
            alert(`${amount} INR was successfully transferred to ${friendName}`)
          })
          .catch((error) => {
            console.log(error);
          });
        }}
      >
        Initiate Transfer
      </button>
      <button className="bg-green-500 py-2 px-20 rounded-lg text-white my-5" onClick={()=>{navigate('/dashboard')}}>Go back to dashboard</button>
    </div>
  );
};
