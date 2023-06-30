import { categories } from '@configs/config';
import { IProduct } from '@models/Product';
import { CustomError } from '@services/api';
import { ProductService } from '@services/product';
import { TenantService } from '@services/tenant';
import { ToastAction, useToast } from '@ui-core/components';
import { MaxWidthLayout, SectionLayout } from '@ui-core/layout';
import { ProductCardContainer } from '@ui-core/templates';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  cat: string;
}

type Props = {
  products: IProduct[];
  category: string;
};

export default function CategoryPage({
  products,
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <MaxWidthLayout>
        <SectionLayout heading={category || ''}>
          <ProductCardContainer products={products} />
        </SectionLayout>
      </MaxWidthLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  ctx: GetServerSidePropsContext<Params>
) => {
  const subdomain = ctx?.req?.headers?.host?.split('.')[0];
  const tenantId = await TenantService.getTenantIdBySubdomain(subdomain!);
  const { cat } = ctx.params!;
  const products = await ProductService.getProductsByCategory(tenantId, cat);
  return { props: { products: products, category: cat } };
};
