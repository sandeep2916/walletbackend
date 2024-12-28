import { memo } from "react";
import { Heading } from "./Heading";
import { ProfilePicture } from "./ProfilePicture";

export const Appbar = memo(({ firstL, firstName }) => {
  return (
    <div className="flex justify-between items-center pb-2">
      <Heading name="Payments App" />
      <div className="mr-5 flex items-center">
        <div className="mx-4 font-semibold text-xl">Hello, {firstName}</div>
        <ProfilePicture firstletter={firstL} />
      </div>
    </div>
  );
});

Appbar.displayName = Appbar;
