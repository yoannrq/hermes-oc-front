import { createContext, useContext } from 'react';

type ContextType = {
  keyify: (key: Array<unknown>) => string;
  getCache: (key: string, defaultValue?: any, ttl?: number) => any;
  setCache: (key: string, value: any, ttl?: number) => void;
  clearCache: () => void;
  deleteCache: (key: string) => void;
};

export const CacheContext = createContext<ContextType | null>(null);

export function useCache() {
  return useContext(CacheContext) as ContextType;
}
