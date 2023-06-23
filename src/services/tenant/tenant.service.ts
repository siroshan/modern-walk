import { ITenant } from '@models/Tenant';
import { axiosUserInstance } from '../api';
import { ISubdomain } from '@models/Subdomain';

export const getTenantIdBySubdomain = async (
  subdomain: string
): Promise<number> => {
  try {
    const { data } = await axiosUserInstance.get<ISubdomain[]>(
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
    const { data } = await axiosUserInstance.get<ITenant>(`tenants/${id}`);
    return data;
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};
