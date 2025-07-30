import React from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate=useNavigate();
  return (
    <div className='p-2 shadow-sm flex justify-between items-center w-full '  >
      <img src='/logo.svg' alt="Logo"  className='hover:cursor-pointer'onClick={()=>navigate('/')} />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
