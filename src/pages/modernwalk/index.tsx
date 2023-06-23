import { categories } from '@configs/config';
import { IProduct } from '@models/Product';
import { CustomError } from '@services/api';
import { ProductService } from '@services/product';
import { CategoryCard, ToastAction, useToast } from '@ui-core/components';
import { MaxWidthLayout, SectionLayout } from '@ui-core/layout';
import { ProductCardContainer } from '@ui-core/templates';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

type PageProps = {
  products: IProduct[];
};

const HomePage = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { toast } = useToast();

  const { isLoading, error, data } = useQuery({
    queryKey: ['products', { limit: 20 }],
    queryFn: () => ProductService.getProducts(20),
  });

  useEffect(() => {
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: new CustomError(error).message,
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      });
    }
  }, [error, isLoading]);

  return (
    <>
      <MaxWidthLayout>
        <SectionLayout heading='Flash Sale'>
          <ProductCardContainer products={products} isLoading={isLoading} />
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
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const products = await ProductService.getProducts(20);
  const filteredProducts = products.filter(
    (prod: IProduct) =>
      prod.category === "men's clothing" || prod.category === "women's clothing"
  );
  return { props: { products: filteredProducts } };
};

export default HomePage;
