import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
export default function Home() {
  const user = useSelector(state => state.users.user);
  return (
    <div className="home">
        <h1>Mowbray Recipes</h1>
        {!user ? null :
        <div className="sessions-links">
        <Link to="/recipes" className="btn btn-primary btn-lg" role="button">
            Recipes
        </Link>
        </div>
        }
    </div>
  )
}
