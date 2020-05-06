import React from 'react'
import { Box, Text, Heading, Image } from 'gestalt'; 
import { NavLink } from 'react-router-dom'; 

const Navbar = () => (
    <Box
        display= "flex"
        alignItems= "center"
        height= {70}
        justifyContent= "around"
        color="midnight"
        padding= {1}
        shape= "roundedButton"> 

    <NavLink activeClassName="active" exact to="signin">
        <Text size="xl" color="white">
            Sign In
        </Text>
    </NavLink>

    <NavLink activeClassName="active" exact to="/">
    <Box display="flex" alighItems="center">
        <Box height={40} width={40}>
        <Image 
            src= "./icons/logo.svg"
            alt="BrewHaha Logo"
            naturalHeigh={1}
            naturealWidth={1}
        />
        </Box>
        <Heading size="xs" color="orange">
            BrewHaha
        </Heading>
        </Box>
    </NavLink>

    <NavLink activeClassName="active" exact to="signup">
        <Text size="xl" color="white">
            Sign Up
        </Text>
    </NavLink>

    </Box>
)
export default Navbar;
