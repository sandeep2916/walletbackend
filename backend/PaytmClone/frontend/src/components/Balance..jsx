import { memo } from "react";

export const Balance = memo(({ bal }) => {
  return (
    <div className="flex mt-8">
      <div className="font-bold text-2xl ml-3 mr-2">Your Balance</div>
      <div className="font-bold text-2xl mx-5">{bal}</div>
    </div>
  );
});

Balance.displayName = Balance;
