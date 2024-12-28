import { useNavigate } from "react-router-dom";
export const Nlgin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="font-bold text-3xl text-center mt-10">
        Please log-in and try again
      </div>
      <div className="w-1/3 mx-auto text-center mt-10">
        <button
          className="text-xl font-medium rounded-md mx-4 border-2 border-slate-900 shadow-md px-4 py-1"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Log in
        </button>
        <button
          className="text-xl font-medium rounded-md mx-4 border-2 border-slate-900 shadow-md px-4 py-1"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};
