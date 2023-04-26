'use client'

import * as React from 'react';
import Logo from "../../assets/logosolo.png"
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box  className="modificar h-full text-white p-0" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h5" sx={{ my: 2 }}>
      <div className="flex justify-center items-center w-fit flex-col p-0  ">
            <Image src={Logo} alt="Logo De Maia Martinez Legisladora"/>
            <h3>Martinez Legisladora</h3>
            </div>
      </Typography>
      <Divider />
      <List className=' font-bold'>
      {
               <ul className='flex gap-3 flex-col'>
               <li>
                 <Link  href="#Inicio">Inicio</Link>
               </li>
               <li>
                 <Link href="#Gallery">Galeria</Link>
               </li>
               <li>
                 <Link href="#Notices">Noticias</Link>
               </li>
             </ul>
            }
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="p-0" sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className='modificar m-0'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <div className="flex justify-center items-center w-fit flex-col">
            <Image src={Logo} alt="Logo De Maia Martinez Legisladora"/>
            <h3>Martinez Legisladora</h3>
            </div>

          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            {
               <ul className='flex gap-3'>
               <li >
                 <Link className=' list-none no-underline text-white' href="#Inicio">Inicio</Link>
               </li>
               <li>
                 <Link className=' list-none no-underline text-white' href="#Gallery">Galeria</Link>
               </li>
               <li>
                 <Link className=' list-none no-underline text-white' href="#Notices">Noticias</Link>
               </li>
             </ul>
            }
          </Box>

        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;