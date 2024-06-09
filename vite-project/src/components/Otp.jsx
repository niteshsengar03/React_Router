import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Button } from "./ui/button";
import { useState } from "react";
import { Contact } from "lucide-react";

export default function Otp() {
  const [value, setValue] = useState(0);
  const[showOTP,setShowOTP]=useState(false);
  function hasTenDigits(value) {
    if (value.toString().length === 10) {
        setShowOTP(true);
    } else {
      alert("Please enter a 10 digit number");
    }
  }

  return <>{ showOTP?(<OTP/>):(
     <PhoneNo value={value} setValue={setValue} hasTenDigits={hasTenDigits} />
  )}</>;
}

function PhoneNo({ value, setValue, hasTenDigits }) {
  return (
    <div>
      <h2>Login via Output</h2>
      <input
        className="border-2 border-gray-500 w-1/2 h-10 mt-5"
        type="number"
        value={value}
        onChange={function (e) {
          setValue(e.target.value);
        }}
      ></input>
      <Button onClick={() => hasTenDigits(value)}>Send OTP</Button>
    </div>
  );
}

function OTP() {
  return (
    <div>
      <h2>Login via OTP</h2>
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <Button>Verify OTP</Button>
    </div>
  );
}
