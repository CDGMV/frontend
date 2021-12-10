import React from "react";
import { Route, Routes, BrowserRouter as Router} from "react-router-dom";

import SignIn from "./pages/signIn";

export default function RoutesNavigation() {
  return(
      <Router>
          <Routes>
            <Route element = { <SignIn/> } path="/" exact />
            {/*<Route element = { <SignIn/> } path="/" exact />*/}
          </Routes>
      </Router>
  )
}