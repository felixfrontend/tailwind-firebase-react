import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  console.log(user?.email);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between p-4 items-center w-full absolute z-[100]">
      <Link to="/">
        <h1 className="text-4xl font-bold cursor-pointer text-red-600 ">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="account">
            <button className="text-white pr-4">Account</button>
          </Link>{" "}
          <button
            onClick={handleLogout}
            className="bg-red-600 rounded px-4 py-2 cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            {" "}
            <button className="bg-red-600 rounded px-4 py-2 cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
