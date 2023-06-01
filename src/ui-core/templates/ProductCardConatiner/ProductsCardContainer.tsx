import { FC } from 'react';
import ProductCard from '../../components/Molucules/ProductCard/ProductCard.component';
import { ProductCardSkeleton } from '../../components/Molucules/ProductCardLoadingSkeleton';
import { ProductCardContainerProps } from './ProductCardContainer.type';

const ProductCardContainer: FC<ProductCardContainerProps> = ({
  products,
  isLoading,
}) => {
  if (!isLoading) {
    return (
      <div className='grid grid-cols-1 items-center justify-start gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product, i) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className='grid grid-cols-1 items-center justify-start gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {Array(8)
          .fill(undefined)
          .map((dummy, i) => (
            <div key={i}>
              <ProductCardSkeleton />
            </div>
          ))}
      </div>
    );
  }
};

export default ProductCardContainer;
