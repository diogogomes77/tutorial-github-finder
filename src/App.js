import React, { Fragment, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
//import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import GithubState from "./context/github/githubState";
import "./App.css";

const App = () => {
  //const [users, setUsers] = useState([]);
  //const [user, setUser] = useState({});
  //const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // async componentDidMount() {
  //   this.setState({
  //     loading: true,
  //   });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({
  //     users: res.data,
  //     loading: false,
  //   });
  // }

  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      // searchUsers={searchUsers} sent using CONTEXT
                      //clearUsers={clearUsers}
                      //showClear={users.length > 0 ? true : false}
                      showAlert={showAlert}
                    />
                    <Users
                    //loading={loading}
                    //users={users}
                    />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                component={User}
                // render={(props) => (
                //   <User
                //     {...props}
                //     //getUser={getUser}
                //     //getUserRepos={getUserRepos}
                //     //user={user}
                //     //repos={repos}
                //     //loading={loading}
                //   />
                // )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
