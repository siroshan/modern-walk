import { TenantService } from '@services/tenant';
import { ITenant } from '@models/Tenant';
import RootStyleLoader from '@ui-core/layout/RootStyleLoader/RootStyleLoader.component';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const subdomain = ctx?.req?.headers?.host?.split('.')[0];
    const tenantId = await TenantService.getTenantIdBySubdomain(subdomain!);
    const tenant = await TenantService.getTenant(+tenantId);

    return {
      ...initialProps,
      styles: <RootStyleLoader theme={tenant.theme} />,
    };
  }
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
