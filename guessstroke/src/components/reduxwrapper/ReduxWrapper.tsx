"use client";
import { Provider } from 'react-redux';
import { Store } from '@/store';

const ReduxWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default ReduxWrapper;