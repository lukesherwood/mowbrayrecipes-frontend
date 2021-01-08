import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { NotificationManager } from 'react-notifications';
import { Nav } from 'react-bootstrap'
import {logUserOut} from './actions/userActions'
import { connect } from "react-redux";
class LogoutLogin extends React.Component {
    
    handleClick = event => {
        event.preventDefault()
        this.props.logUserOut()
        NotificationManager.success(`You have successfully logged out`, 'Successful!', 2000)
        this.props.history.push('/');
      }
  
      render() {
        return (

        <div>
        {!this.props.loggedIn ? (
          <Nav variant="pills">
          <Nav.Link as={NavLink} to='/signIn' exact>Sign In</Nav.Link>
          <Nav.Link as={NavLink} to='/signUp' exact>Register</Nav.Link>
          </Nav>
        ) : (
          <Nav variant="pills">
          <Nav.Link onClick={this.handleClick}>
            Sign out
          </Nav.Link>
          </Nav>
        )}
      </div>
        )
      }
    }

    const mapStateToProps = (state) => {
      return {
        user: state.users.user,
        loggedIn: state.users.loggedIn
      }
    }
    
    const mapDispatchToProps = (dispatch) => {
      return {
        logUserOut: () => dispatch(logUserOut())
      }
    }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogoutLogin))
      
