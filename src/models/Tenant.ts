import { ICategory } from './Category';
import { IProduct } from './Product';
import { ITenantTheme } from './TenantTheme';

export interface ITenant {
  id: number;
  theme: ITenantTheme;
  products: IProduct[];
  categories: ICategory[];
}
