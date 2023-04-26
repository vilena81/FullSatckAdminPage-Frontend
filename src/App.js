
import React from "react";

import {  Route, Routes } from "react-router-dom";
// import AuthPage from "./pages/AuthPage";
import { Home } from "./Home";
import Regitration from "./Regitration";
import Login from "./Login";
import "./App.css"
import { Admin } from "./Admin";

function App() {

  return (
    <div className="App" >

      

      <div>
        
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Regitration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          {/* <Route path='/admin' element={<AuthPage />} /> */}
        </Routes>
      </div>


    </div>
  )
}




export default App;