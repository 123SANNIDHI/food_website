import React,{useState} from 'react'
import {AppBar,Box,Divider,Drawer,IconButton,Toolbar,Typography } from "@mui/material"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom'
import '../../styles/HeaderStyles.css'
const Header = () => {
  const[mobileOpen,setMobileOpen]=useState(false)
//  handle menu drawer
const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen)
}
  //menu drawerr
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
       <Typography 
            color={'goldenrod'} 
            variant='h6' 
            component={'div'} 
            sx={{flexGrow:1,my:2}}>
            <FastfoodIcon/>
            My Restuarant
            </Typography>
            <Divider/>
              <ul className='mobile-navigation' >
                <li>
                  <NavLink activeClassname="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/Menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/About"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/Contact"}>Contact</NavLink>
                </li>
              </ul>
    </Box>
  )
  return (
    <>
      <Box>
          <AppBar component={"nav"} sx={{bgcolor:"black"}}>
            <Toolbar>
              <IconButton color="inherit"
              aria-label='open drawer'
              edge='start'
              sx={{
                mr:2}}
                onClick={handleDrawerToggle}
             >
              <MenuIcon/>
              </IconButton>
            <Typography 
            color={'goldenrod'} 
            variant='h6' 
            component={'div'} 
            sx={{flexGrow:1}}>
            <FastfoodIcon/>
            My Restuarant
            </Typography>
            <Box sx={{display:{xs:"none",sm:"red"}}}>
              <ul className='navigation-menu' >
                <li>
                  <NavLink activeClassname="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/Menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/About"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/Contact"}>Contact</NavLink>
                </li>
              </ul>

            </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
                <Drawer varient="temporary" open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                  display:{xs:"block"},
                  "& .MuiDrawer-paper":{
                    boxSizing:"border-box",
                    width:"240px",
                  }
                }}>
                  {drawer}
             </Drawer> 
          </Box>
          <Box>
          <Toolbar/>
          </Box>
        </Box>
    </>
  )
}

export default Header