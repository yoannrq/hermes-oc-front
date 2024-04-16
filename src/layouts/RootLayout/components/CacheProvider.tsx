import { ReactNode } from 'react';
import { CacheContext } from '../../../contexts/cacheContext';

type CachedDataType = {
  expiry: Date;
  data: any;
};

export default function CacheProvider({ children }: { children: ReactNode }) {
  const map = new Map<string, CachedDataType>();

  function keyify(key: Array<unknown>) {
    return key.map((item) => JSON.stringify(item)).join('-');
  }

  function getCache(key: string, defaultValue?: any, ttl?: number) {
    const cacheValue = map.get(key);
    if (!cacheValue) {
      if (defaultValue !== undefined) {
        setCache(key, defaultValue, ttl);
      }
      return defaultValue;
    }
    if (new Date().getTime() > cacheValue.expiry.getTime()) {
      map.delete(key);
      return undefined;
    }
    return cacheValue.data;
  }

  function setCache(key: string, value: any, ttl: number = 10) {
    var t = new Date();
    t.setSeconds(t.getSeconds() + ttl);
    map.set(key, {
      expiry: t,
      data: value,
    });
  }

  function clearCache() {
    map.clear();
  }

  function deleteCache(key: string) {
    map.delete(key);
  }

  const contextValue = {
    keyify,
    getCache,
    setCache,
    clearCache,
    deleteCache,
  };

  return (
    <CacheContext.Provider value={contextValue}>
      {children}
    </CacheContext.Provider>
  );
}
