import { IProduct } from '@models/Product';
import { ProductService } from '@services/product';
import { ProductCard } from '@ui-core/components';
import { MaxWidthLayout } from '@ui-core/layout';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  pid: string;
}
type Props = {
  product: IProduct;
};

export default function Index({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MaxWidthLayout>
      <div className='mx-auto mt-4 w-full max-w-xs'>
        <ProductCard product={product} />
      </div>
    </MaxWidthLayout>
  );
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { pid } = context.params!;
  const res = await ProductService.getProduct(+pid);

  return {
    props: {
      product: res,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await ProductService.getProducts(5);

  const paths = res.map((prod) => ({
    params: { pid: prod.id.toString() },
  }));

  return { paths, fallback: 'blocking' };
};
