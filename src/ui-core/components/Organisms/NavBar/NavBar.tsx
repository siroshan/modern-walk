import { FC, ReactNode } from 'react';

const NavBar: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='sticky top-0 z-50 box-border w-full border-b-2 border-black bg-gray-50 px-4'>
      {children}
    </div>
  );
};

export default NavBar;
