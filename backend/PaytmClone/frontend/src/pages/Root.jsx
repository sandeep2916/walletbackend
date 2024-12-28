import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RootHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/signin");
  }, []);

  return <div className="text-3xl w-1/3">Loading...</div>;
};
