import React, { useState } from 'react';

import { Route, Routes, BrowserRouter as Router} from "react-router-dom";

import Home from "./pages/home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import GamePage from "./pages/gamePage";
import NavBar from './components/navbar';

export default function RoutesNavigation() {
  const [open, setOpen] = useState(false);

  return(
      <Router>
          <NavBar open={open} setOpen={setOpen} />
          <Routes>
            <Route element = { <Home/> } path="/" exact />
            <Route element = { <SignIn/> } path="/signIn" exact />
            <Route element = { <SignUp/> } path="/signUp" exact />
            <Route element = { <GamePage/> } path="/gamerent" exact />
          </Routes>
      </Router>
  )
}