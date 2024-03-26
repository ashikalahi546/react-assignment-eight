import { Outlet } from "react-router-dom";
import Navber from "./Navber";

const Root = () => {
  return (
    <div className="w-8/12 mx-auto">
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
