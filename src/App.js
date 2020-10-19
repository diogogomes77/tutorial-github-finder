import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
