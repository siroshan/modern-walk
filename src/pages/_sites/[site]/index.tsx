import { categories } from '@configs/config';
import { IProduct } from '@models/Product';
import { ITenant } from '@models/Tenant';
import { ProductService } from '@services/product';
import { TenantService } from '@services/tenant';
import { CategoryCard } from '@ui-core/components';
import { MaxWidthLayout, SectionLayout } from '@ui-core/layout';
import { ProductCardContainer } from '@ui-core/templates';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  site: string;
}

type Props = {
  tenant: ITenant;
};

export default function HomePage({
  tenant,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <MaxWidthLayout>
        <SectionLayout heading='Flash Sale'>
          <ProductCardContainer products={tenant.products.slice(0, 4)} />
        </SectionLayout>
        <SectionLayout heading='Categories'>
          <div className='grid w-full grid-cols-2 items-center justify-center gap-5'>
            {tenant.categories.map((category, i) => (
              <CategoryCard key={i} category={category} />
            ))}
          </div>
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
  const tenant = await TenantService.getTenant(tenantId);
  return { props: { tenant: tenant } };
};
