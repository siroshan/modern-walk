import { Typography } from '@ui-core/components';
import { MaxWidthLayout } from '@ui-core/layout';

export default function Custom500() {
  return (
    <MaxWidthLayout>
      <Typography variant='h1'>500 - Server-side error occurred</Typography>
    </MaxWidthLayout>
  );
}
