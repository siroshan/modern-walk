import { categories } from '@configs/config';
import { IProduct } from '@models/Product';
import { CustomError } from '@services/api';
import { ProductService } from '@services/product';
import { CategoryCard, ToastAction, useToast } from '@ui-core/components';
import { MaxWidthLayout, SectionLayout } from '@ui-core/layout';
import { ProductCardContainer } from '@ui-core/templates';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  site: string;
}

export default function HomePage({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <MaxWidthLayout>
        <SectionLayout heading='Flash Sale'>
          <ProductCardContainer products={products} />
        </SectionLayout>
        <SectionLayout heading='Categories'>
          <div className='grid w-full grid-cols-2 items-center justify-center gap-5'>
            {categories.map((category, i) => (
              <CategoryCard key={i} category={category} />
            ))}
          </div>
        </SectionLayout>
      </MaxWidthLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  products: IProduct[];
}> = async () => {
  const res = await ProductService.getProducts(20);
  const products = res.filter(
    (prod: IProduct) =>
      prod.category === "men's clothing" || prod.category === "women's clothing"
  );
  return { props: { products: products.slice(0, 4) } };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return { paths: [], fallback: 'blocking' };
};
