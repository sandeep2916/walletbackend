export const ProfilePicture = ({ firstletter }) => {
  return (
    <div className="bg-slate-400 w-10 h-10 flex flex-row justify-center items-center p-2 rounded-full font-semibold text-lg">
      {firstletter}
    </div>
  );
};
