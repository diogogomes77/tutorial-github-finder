import React, { useEffect, Fragment, useContext } from "react";
//import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUserRepos, repos, user, loading, getUser } = githubContext;
  useEffect(() => {
    getUser(match.params.login); // passing the username argument from url login param
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []); // to mimic the behavior of componentDidMount we just add an empty array to prevent a loop

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-right">
        Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-sucess" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Blog: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public repos: {public_repos}</div>
        <div className="badge badge-dark">Public gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

// User.propTypes = {
//   //loading: PropTypes.bool.isRequired,
//   //user: PropTypes.object.isRequired,
//   repos: PropTypes.array.isRequired,
//   //getUser: PropTypes.func.isRequired,
//   getUserRepos: PropTypes.func.isRequired,
// };
export default User;
