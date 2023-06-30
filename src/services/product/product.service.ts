import { axiosInstance } from '@services/api/api';
import { IProduct } from '../../models/Product';
import { ITenant } from '@models/Tenant';

export const getProductsByTenant = async (id: number): Promise<IProduct[]> => {
  try {
    const { data } = await axiosInstance.get<ITenant>(`tenants/${id}`);
    return data.products;
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};

export const getProduct = async (id: number): Promise<IProduct> => {
  try {
    const { data } = await axiosInstance.get<IProduct>(`products/${id}`);
    console.log('data>>>>>>>', data);
    return data;
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};

export const getProductsByCategory = async (
  tenantId: number,
  category: string
): Promise<IProduct[]> => {
  try {
    const { data } = await axiosInstance.get<ITenant>(`tenants/${tenantId}`);
    const products = data.products.filter(
      (product) => product.category === category
    );
    return products;
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};
