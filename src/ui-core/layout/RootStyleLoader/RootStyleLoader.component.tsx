import { ITenantTheme } from '@models/TenantTheme';
import React from 'react';

const RootStyleLoader = ({ theme }: { theme: ITenantTheme }) => {
  return (
    <style>
      {`:root {
          --category-men: ${theme?.colorCategoryMen};
          --category-women: ${theme?.colorCategoryWomen};
          --category-jewelery:  ${theme?.colorCategoryJewelery};
          --category-electronics:  ${theme?.colorCategoryElectronics};
        }`}
    </style>
  );
};

export default RootStyleLoader;
