'use client';

import { categories } from '@configs/config';
import { IProduct } from '@models/Product';
import { CustomError } from '@services/api';
import { ProductService } from '@services/product';
import { ToastAction, useToast } from '@ui-core/components';
import { MaxWidthLayout, SectionLayout } from '@ui-core/layout';
import { ProductCardContainer } from '@ui-core/templates';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const CategoryPage = ({ params }: { params: { cat: string } }) => {
  const { toast } = useToast();
  const router = useRouter();
  const category = categories.find((category) => category.link === params.cat);
  const [products, setProducts] = useState<IProduct[]>([]);

  const { isLoading, error, data } = useQuery(
    ['products', { category: category?.title }],
    () => ProductService.getProductsByCategory(category?.title || '')
  );

  useEffect(() => {
    if (!isLoading && Array.isArray(data)) {
      setProducts(data);
    }
  }, [isLoading, data]);

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
        <SectionLayout heading={category?.title || ''}>
          <ProductCardContainer products={products} isLoading={isLoading} />
        </SectionLayout>
      </MaxWidthLayout>
    </>
  );
};

export default CategoryPage;
