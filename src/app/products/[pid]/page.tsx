import { IProduct } from '@models/Product';
import { ProductService } from '@services/product';
import { ProductCard } from '@ui-core/components';
import { MaxWidthLayout } from '@ui-core/layout';

export default async function Index({ params }: { params: { pid: string } }) {
  const product = await ProductService.getProduct(+params.pid);

  return (
    <MaxWidthLayout>
      <div className='mx-auto mt-4 w-full max-w-xs'>
        <ProductCard product={product} />
      </div>
    </MaxWidthLayout>
  );
}
