import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* Add any common components like a header or sidebar here */}
      <Outlet /> {/* This is where the child routes will render */}
    </div>
  );
};

export default Layout;
