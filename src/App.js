
import React from "react";
import { Router, Route, Routes } from "react-router-dom";
// import AuthPage from "./pages/AuthPage";
import { Home } from "./Home";
import Regitration from "./Regitration";
import Login from "./Login";
import "./App.css";
import { Admin } from "./Admin";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Header from "./pages/Header";
import AddProduct from "./pages/AddProduct";


function App() {

  return (
    <div className="App" >
      
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Regitration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/products' element={<Products />} />
          <Route path='/category' element={<Category />} />
          <Route path='/addproducts' element={<AddProduct />} />
        </Routes>
      </div>


    </div>
  )
}




export default App;