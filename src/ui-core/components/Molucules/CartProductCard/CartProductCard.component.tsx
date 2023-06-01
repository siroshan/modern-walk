import { FC } from 'react';
import { IProduct } from '../../../../models/Product';

const CartProductCard: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className='w-64 p-2'>
      <div className='flex'>
        <img height={50} width={50} src={product.image} alt={product.title} />
        <div className='ml-4'>{product.title}</div>
      </div>
    </div>
  );
};

export default CartProductCard;