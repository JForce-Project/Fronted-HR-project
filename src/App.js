import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Envanterler from "./pages/Envanterler/Envanterler"
import EnvanterDetay from "./pages/EnvanterDetay/EnvanterDetay"

import Signin from "./pages/Auth/Signin"
import Signup from "./pages/Auth/Signup"

function App() {
  return (
    <Router>
      <div>

        <Navbar />
        <div id="content">
          <Switch>
            <Route path="/" exact component={Envanterler} />
            <Route path="/a" component={EnvanterDetay} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
