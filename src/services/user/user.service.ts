import { axiosInstance } from '@services/api/api';
import { IUser } from '../../models/User';

export const createUser = async (user: IUser): Promise<IUser> => {
  try {
    const { data } = await axiosInstance.post(`users`, { ...user });
    return data;
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};

export const getUser = async (email: string): Promise<IUser> => {
  try {
    const { data } = await axiosInstance.get(`users?email=${email}`);
    return data[0];
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};
