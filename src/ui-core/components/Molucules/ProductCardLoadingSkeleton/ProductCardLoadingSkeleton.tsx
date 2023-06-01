import { Skeleton } from '../../Atoms/Skeleton';
import { FC } from 'react';

const ProductCardLoadingSkeleton: FC = () => {
  return (
    <div className='flex flex-col items-center space-x-4'>
      <Skeleton className='mb-2 h-40 w-40' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  );
};
export default ProductCardLoadingSkeleton;
