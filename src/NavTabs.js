import React from 'react';
import LinkTab from './LinkTab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';


function NavTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
          <LinkTab label="Todo List" to="/" />
          <LinkTab label="About" to="/about" />
          <LinkTab label="Contact" to="/contact" />
        </Tabs>
      </Box>
    );
  }

  export default NavTabs;
