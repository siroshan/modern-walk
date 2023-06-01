import { ReactNode } from 'react';
import { IUser } from '../../models/User';

export type UserContextType = {
  user: IUser | undefined;
  signIn: (user: IUser) => void;
  signOut: () => void;
};

export type UserProviderProps = {
  children: ReactNode;
}