import * as React from 'react';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default LinkTab;

