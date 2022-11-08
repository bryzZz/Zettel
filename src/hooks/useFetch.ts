import { useCallback, useState } from "react";

export const useFetch = <T extends any[]>(
  callback: (...args: T) => Promise<any>
) => {
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(async (...args: T) => {
    try {
      setLoading(true);
      await callback(...args);
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetch, loading };
};
