import { useEffect, useState } from 'react';

function useFetch (url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(_ => setLoading(false))
  }, [url])

  return {
    data,
    loading,
    error,
    setData
  }
}

export default useFetch;