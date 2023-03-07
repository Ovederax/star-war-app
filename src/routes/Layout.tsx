import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AppBar, Box, Stack, styled, Toolbar } from '@mui/material'
import logo from '../resources/logo.png'
import { routes } from '../const'
import NavLink from '../components/NavLink'

const DrawerHeaderFiller = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'end',
  height: '97px',
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme }) => ({
  flexGrow: 1,
  // paddingLeft: theme.spacing(2),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginTop: 0,
  marginLeft: 0,
}))

const HeaderContent = () => {
  return (
    <Box
      display="flex"
      justifyContent={{
        xs: 'center',
        sm: 'space-between',
      }}
      alignItems="center"
      width="100%"
      maxWidth="1200px"
      height="97px"
    >
      <Box mt="10px" mb="3px" display={{ xs: 'none', sm: 'block' }}>
        <Link to={routes.home}>
          <img src={logo} alt="Logo" />
        </Link>
      </Box>
      <Stack direction="row" spacing={8}>
        <Box>
          <NavLink to={routes.home}>Home</NavLink>
        </Box>
        <Box>
          <NavLink to={routes.characters}>Characters</NavLink>
        </Box>
      </Stack>
    </Box>
  )
}

const mainSX = { display: 'flex', flexDirection: 'column' }

const Layout = () => {
  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ background: '#1F2A63' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <HeaderContent />
        </Toolbar>
      </AppBar>
      <Main sx={mainSX}>
        <DrawerHeaderFiller />
        <Outlet />
      </Main>
    </>
  )
}

export default Layout
