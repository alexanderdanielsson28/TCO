import React from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Button } from 'react-bootstrap';


const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () => {
  const customButtonStyle = (
 
      <style type="text/css">
        {`
      .btn-custom {
          background-color: purple;
          color: white;
      }
      `}
      </style>
      
  
  );
  return (
    
    <Nav style={{ backgroundColor: '#808080' }} justified='center' bsStyle="pills"  >
      <NavItem bsStyle={customButtonStyle} style={{ fontSize: 25 }} componentClass={Link} href="/home" to={routes.HOME}> <span style={{ color: 'white' }}>Home</span> </NavItem>
      <NavItem style={{ fontSize: 25 }} componentClass={Link} href="/landing" to={routes.LANDING}> <span style={{ color: 'white' }}>Landing</span> </NavItem>
      <NavItem style={{ fontSize: 25 }} componentClass={Link} href="/book" to={routes.About}> <span style={{ color: 'white' }}>About </span></NavItem>
      <NavItem style={{ fontSize: 25, }} componentClass={Link} href="/book" to={routes.ACCOUNT}> <span style={{ color: 'white' }}>Account</span> </NavItem>
    </Nav>
  )

}

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>
export default Navigation;


