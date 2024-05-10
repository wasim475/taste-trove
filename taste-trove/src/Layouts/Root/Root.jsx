import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/SharedPages/Navbar/Navbar";
import Login from "../../Pages/SharedPages/Navbar/Login/Login";

const Root = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
