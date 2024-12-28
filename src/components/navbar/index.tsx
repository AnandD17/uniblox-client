import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">Logo</h1>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
      </div>
    </div>
  );
};

export default Navbar;
