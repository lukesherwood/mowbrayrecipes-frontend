import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { NotificationManager } from 'react-notifications';
import { Nav } from 'react-bootstrap'
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
          <Nav.Link onClick={this.handleClick}>
            Sign out
          </Nav.Link>
        )}
      </div>
        )
      }
    }
export default withRouter(LogoutLogin)
      
