import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { RecoilRoot } from "recoil";
import { RootHandler } from "./pages/Root";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/send" element={<SendMoney />}></Route>
            <Route path="/" element={<RootHandler/>}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
