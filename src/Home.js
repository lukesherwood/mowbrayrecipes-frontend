import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Home() {
  const user = useSelector((state) => state.users.user);
  return (
    <div className="home">
      {user ? null : (
        <div className="sessions-links">
          <Link to="/signUp" className="btn btn-primary btn-sm" role="button">
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
