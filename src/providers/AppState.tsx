import React, {useContext, useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {AppData, User} from '../common/types';

export interface AppDataProvider {
  activeUser: User;
  setActiveUser: (value: User) => void;
}

export const AppStateContext = React.createContext<any>({});

export const useAppData = (): AppDataProvider => {
  return useContext(AppStateContext);
};

const AppStateProvider = ({children}) => {
  const [activeUser, setActiveUser] = useState<User>();

  const loginUser = (value: User) => {
    //Some vlidation
    //Set variables
    console.log('Active user set to:', value);
    setActiveUser(value);
  };
  return (
    <AppStateContext.Provider
      value={{
        activeUser: activeUser,
        setActiveUser: loginUser,
      }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;