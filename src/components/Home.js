import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Home() {
  let loggedIn = useSelector((state) => state.users.loggedIn);
  return (
    <div className="home">
      <h1>Recipes for all here</h1>
      {loggedIn ? null : (
        <div className="sessions-links">
          Please log in or register to continue
          <Link to="/recipes" className="btn btn-primary btn-sm" role="button">
            Sign up
          </Link>
          <Link to="/signIn" className="btn btn-primary btn-sm" role="button">
            Sign in
          </Link>
        </div>
      )}
    </div>
  );
}
