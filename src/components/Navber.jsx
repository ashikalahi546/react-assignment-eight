import { Link, NavLink } from "react-router-dom";


const Navber = () => {
  return (
    <div className="flex  justify-between bg-base-100 my-3.5">

      <div >
        <NavLink to="/error" className="btn btn-ghost text-xl font-bold">
          Book Vibe
        </NavLink>
      </div>
      <div className="">
        <ul className="menu menu-horizontal px-1 font-medium flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary border border-primary px-3 py-1.5 rounded "
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive
                ? "text-primary border border-primary px-3 py-1.5 rounded "
                : ""
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/pages"
            className={({ isActive }) =>
              isActive
                ? "text-primary border border-primary px-3 py-1.5 rounded "
                : ""
            }
          >
            Pages to Read
          </NavLink>
        </ul>
      </div>
      <div className="sm:block hidden">
        <Link
          to="/error"
          className="btn bg-primary text-white hover:bg-green-500 "
        >
          Sign In
        </Link>
        <Link to="/error" className="btn bg-[#59C6D2] text-white ml-2 ">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navber;
