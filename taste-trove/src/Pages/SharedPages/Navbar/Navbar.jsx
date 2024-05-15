import { Link, NavLink } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContex } from "../../../AuthProvider/AuthProvider";
// import { AuthContex } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  let { user, logOut } = useContext(AuthContex);

  let Navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allFoods">All Foods</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
     
    </>
  );

  let handleLogout = () => {
    logOut()
      .then((result) => {
        toast("logOut");
      })
      .catch();
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <FaBars />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-Lora shadow bg-base-100 rounded-box w-52"
              >
                {Navlinks}
              </ul>
            </div>
            <Link
              className="btn btn-ghost text-xl font-bo font-Raleway bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent hidden md:flex lg:flex"
              to="/"
            >
              {" "}
              <IoRestaurant className="text-red-300" />
              Taste Trove
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-Lora">{Navlinks}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="">
                  <div className="avatar">
                    <div className="lg:w-16 md:w-16 w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src={
                          user?.photoURL ||
                          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        }
                      />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/my-added-foods">My added food items</Link>
                  </li>
                  <li>
                    <Link to="/added-food-item">Add a food item</Link>
                  </li>
                  <li>
                    <Link to="/my-order-list">My ordered food items</Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout}>Log Out</Link>
                    <ToastContainer></ToastContainer>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                className="btn bg-primaryColor font-Lora text-white"
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
