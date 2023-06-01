import { FC, useMemo, useState, createContext, useContext } from 'react';
import { IUser } from '../../models/User';
import { UserContextType, UserProviderProps } from './userContext.type';

const UserContext = createContext<UserContextType | null>(null);

const UserProvider:FC<UserProviderProps> = (props) => {
  const [user, setUser] = useState<IUser>();

  const signIn = (user: IUser) => {
    setUser(user);
  };

  const signOut = () => {
    setUser(undefined);
  };

  const value = useMemo(() => {
    return { user, signIn, signOut };
  }, [user]);

  return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("userContext must be used within UserProvider");

  return { ...context };
};

export { useUser, UserProvider }
