import React from 'react';
import { Button } from '../ui/button';

export const Header = () => {
  return (
    <div className='p-2 shadow-sm flex justify-between items-center w-full'>
      <img src='/logo.svg' alt="Logo" />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
