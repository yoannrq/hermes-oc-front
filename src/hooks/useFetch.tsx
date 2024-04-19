import { useEffect, useState, SetStateAction } from 'react';
import { useCache } from '../contexts/cacheContext';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

type FetchConfig = AxiosRequestConfig & {
  key: Array<unknown>;
  initialEnabled?: boolean;
  cache?: {
    enabled?: boolean;
    ttl?: number;
  };
  onSuccess?: (data: AxiosResponse, cacheKey: string) => void;
  onCacheHit?: (data: AxiosResponse, cacheKey: string) => void;
  onError?: (err: AxiosError, cacheKey: string) => void;
};

export default function useFetch<T = any>({
  key,
  initialEnabled = true,
  cache,
  onSuccess,
  onCacheHit,
  onError,
  ...axiosConfig
}: FetchConfig) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<any>();
  const { getCache, setCache, deleteCache, keyify } = useCache();

  const overrideData = (setter: SetStateAction<T>) => {
    if (typeof setter === 'function') {
      setData((prevData) => {
        const newData = setter(prevData);
        if (cache?.enabled) setCache(keyify(key), newData, cache.ttl);
        return newData;
      });
    } else {
      if (cache?.enabled) setCache(keyify(key), setter, cache.ttl);
      setData(setter);
    }
  };

  const refetch = (hard: boolean = false) => {
    setLoading(true);
    setError(undefined);
    const cacheKey = keyify(key);

    if (cache?.enabled && getCache(cacheKey) !== undefined && !hard) {
      setData(getCache(cacheKey));
      setLoading(false);
      setError(undefined);
      if (onCacheHit) onCacheHit(getCache(cacheKey), cacheKey);
      return;
    }

    axios(axiosConfig)
      .then((data) => {
        setData(data.data as T);
        if (cache?.enabled) setCache(cacheKey, data.data, cache.ttl);
        if (onSuccess) onSuccess(data, cacheKey);
      })
      .catch((err) => {
        setError(err);
        if (onError) onError(err, cacheKey);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  function inValidate(invalidationKey: FetchConfig['key']) {
    deleteCache(keyify(invalidationKey));
  }

  useEffect(() => {
    if (initialEnabled) refetch();
  }, []);

  return {
    loading,
    data,
    setData: overrideData,
    error,
    refetch,
    inValidate,
  } as const;
}
