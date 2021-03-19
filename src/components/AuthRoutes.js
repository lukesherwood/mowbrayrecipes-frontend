import React from 'react'
import { Route, Redirect } from 'react-router-dom';

export default function AuthRoutes(props) {
    return props.loggedIn ? <Route {...props} /> : <Redirect to='/signIn' />
}
