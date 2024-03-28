import { Outlet } from "react-router-dom";
import Navber from "./Navber";

const Root = () => {
  return (
    <div className="xl:w-8/12 mx-auto xl:px-0 px-8">
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
