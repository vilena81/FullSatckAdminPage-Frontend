import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
const navigate=useNavigate()
  function logOut(){
    localStorage.clear();
    
    navigate('/')

  }

  return (
    <div className="container-nav">

      <nav className="navbar">
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/addproducts">Add Products</Link>
          </li>
          <li>
          <Link to="/addcategory">Add Category</Link>
          </li>
          <li>
            <Link to="/login">Sign in</Link>
          </li>
          <li>
            <Link to="/register">Sign up</Link>
          </li>
          <li>
            <Link onClick={logOut} to="/">Log out</Link>
          </li>
        </ul>
      </nav>


    </div>
  );
};

export default Header;