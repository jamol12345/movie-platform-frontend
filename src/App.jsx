import React from "react";
import Layout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";
import { Routes, Route } from "react-router-dom"
import SignUp from "../src/containers/SignUp/SignUp"

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<h1 style={{fontSize:"2rem"}}>404 ERROR!</h1>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>

      </Routes>
    </Layout>
  );
};

export default App;
