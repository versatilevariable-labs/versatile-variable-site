import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/vv-logo.png"; // ✅ Import your logo

const Navbar = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        {/* Logo Section */}
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="VV Logo"
            style={{ height: "40px", marginRight: "10px" }} // small logo
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Versatile Variable
          </Typography>
        </Box>

        {/* Nav Links */}
        <Box>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/courses" color="inherit">
            Courses
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
