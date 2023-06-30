import { FC } from 'react';
import { CategoryCardProps } from './CategoryCard.type';
import { Typography } from '../../Atoms/Typography';
import Link from 'next/link';
import { getCategoryColor } from '@configs/config';
import { ICategory } from '@models/Category';

const CategoryCard: FC<{ category: ICategory }> = ({ category }) => {
  const bgColor = getCategoryColor(category.name);

  return (
    <Link
      href={`categories/${category.name}`}
      className='text-inherit no-underline'
      style={{ width: '100%' }}
    >
      <div
        className={`flex h-52 w-full flex-row items-center justify-center rounded-3xl ${bgColor}`}
      >
        <Typography variant='h2' className='text-center text-white'>
          {category.name}
        </Typography>
      </div>
    </Link>
  );
};

export default CategoryCard;
