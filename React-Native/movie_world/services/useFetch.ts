import { useEffect, useState } from 'react';

const useFetch = <T>(
  fetchFunction: () => Promise<T>,
  deps: any[] = [], 
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFunction();
      console.log(result)
      setData(result);
    } catch (err) {
      //@ts-ignore
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;