import { ITenantTheme } from '@models/TenantTheme';
import React from 'react';

const RootStyleLoader = ({ theme }: { theme: ITenantTheme }) => {
  return (
    <style>
      {`:root {
          --category-men: ${theme?.colorCategoryMen};
          --category-women: ${theme?.colorCategoryWomen};
        }`}
    </style>
  );
};

export default RootStyleLoader;
