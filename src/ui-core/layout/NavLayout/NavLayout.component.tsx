import { FC, ReactNode } from 'react';
import { NavBarTemplate } from '@ui-core/templates';

const NavLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <NavBarTemplate />
      {children}
    </>
  );
};

export default NavLayout;
