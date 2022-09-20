import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
import { useEffect } from "react";

// import MenuIcon from "@mui/icons-material/Menu";


const Navigation = (props) => {

    const {loggedInBool, setLoggedInBool} = props;
    useEffect(() => {
      console.log("this is logged in",props.loggedInBool)
    });

    console.log("this is logged in",props.loggedInBool)
    console.log("this is props",props)


  return (
    <AppBar position="relative" color="secondary">
      <Toolbar>
        <IconButton color="inherit">
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Listings</Link>
          </li>
          {loggedInBool && <li className="nav-list-item">
          <Link style={{color: 'white', textDecoration: 'none'}} to="/add">Add Listing</Link>
            </li>}
    
            {loggedInBool ? 
            <li className="nav-list-item">
            <Link style={{color: 'white'}} to="/login" onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              })
              document.cookie = cookie.serialize("userName", null, {
                maxAge: 0
              })
              setLoggedInBool(false);
              }
            }>LOGOUT</Link>
          </li> :
            <li className="nav-list-item">
              <Link style={{color: 'white'}} to="/login">LOGIN</Link>
            </li>}





            {/* <li className="nav-list-item">
            <Link style={{color: 'white', textDecoration: 'none'}} to="/login" onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              })
              document.cookie = cookie.serialize("userName", null, {
                maxAge: 0
              })
              setLoggedInBool(false);
              }
            }>Logout</Link>
          </li> :
            <li className="nav-list-item">
              <Link style={{color: 'white', textDecoration: 'none', fontFamily: 'Helvetica'}} to="/login">Login</Link>
            </li> */}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;