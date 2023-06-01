import { IUser } from '../../models/User';
import { axiosUserInstance } from '../api';

export const createUser = async (user: IUser): Promise<IUser> => {
  try {
    const { data } = await axiosUserInstance.post(`users`, { ...user });
    return data;
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};

export const getUser = async (email: string): Promise<IUser> => {
  try {
    const { data } = await axiosUserInstance.get(`users?email=${email}`);
    return data[0];
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};
