import { ITenant } from '@models/Tenant';
import { ISubdomain } from '@models/Subdomain';
import { axiosInstance } from '@services/api/api';
import { ICategory } from '@models/Category';

export const getTenantIdBySubdomain = async (
  subdomain: string
): Promise<number> => {
  try {
    const { data } = await axiosInstance.get<ISubdomain[]>(
      `subdomains?subdomain=${subdomain}`
    );
    if (data[0]) {
      return data[0].tenantId;
    }
    return 1;
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};

export const getTenant = async (id: number): Promise<ITenant> => {
  try {
    const { data } = await axiosInstance.get<ITenant>(`tenants/${id}`);
    return data;
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};

export const getTenantCategories = async (id: number): Promise<ICategory[]> => {
  try {
    const { data } = await axiosInstance.get<ITenant>(`tenants/${id}`);
    return data.categories;
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};
