
import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Home from "./components/Home";
import "./styles.css";
import Wishlist from "./components/Wishlist";
import Login from "./components/Login";
import { MenuIcon } from "./icons/Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Checkout from "./components/Checkout"; 

function App() {
  const { pathname } = useLocation();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isStorebtn, setIsStorebtn] = useState(pathname === "/");

  const menuClickHandler = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  const handleGoToCartClick = () => {
    setIsStorebtn(true);
  };

  return (
    <div className="App">
      <nav
        style={{
          width: "100%",
          display: "flex",
        alignItems:"center", 
        paddingTop: "10px",
        }}
      >
        {/* {pathname !== "/" && ( */}
          <Link className="Home" to="/">
            {/* <button className="home">Home</button> */}
            <img className="brand-logo"src="https://img.freepik.com/free-vector/hands-holding-heart-neon-sign_1262-15582.jpg?size=338&ext=jpg"/>  
          </Link>
          <span className="brand-name">The PetStore</span>
        <MenuIcon onClick={menuClickHandler} />
           {/* <span className="brand-name">The PetStore</span> */}
           <div className="navbar">
  <div className={`menu ${isNavbarOpen && "active"}`}>
    {(pathname === "/" || pathname === "/cart" || pathname === "/wishlist") && (
      <Link to="/products">
        <button className="Storebtn">
          <FontAwesomeIcon className="store-icon" icon={faStore} />
          <div className="fontIcon">STORE</div> 
        </button>
      </Link>
    )}
         <Link to="/cart">
      <button className="Cartbtn" onClick={handleGoToCartClick}>
        <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
        <div className="fontIcon">CART</div> 
      </button>
    </Link>

   <Link to="/wishlist">
      <button className="wishlistbtn">
        <FontAwesomeIcon className="wishlist-icon" icon={faHeart} />
        <div className="fontIcon">WISHLIST</div> 
      </button>
    </Link>

    <Link to="/login" state={{ from: pathname }}>
      <button className="loginbtn">
        <FontAwesomeIcon className="login-icon" icon={faUser} />
        <div className="fontIcon">LOGIN</div>
      </button>
    </Link>
          </div>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
