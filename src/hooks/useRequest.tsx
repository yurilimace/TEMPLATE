import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useState } from "react";

type Callback <T> = () => Promise<AxiosResponse<T>>

export function useRequest<T>(callback: Callback<T>) {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<AxiosResponse<T> | null>(null)
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    async function load() {
      setLoading(true)
      const response = await callback()
      setResponse(response)
      setData(response.data)
      setLoading(false)
    }
    load()
  }, [])

  return { response, data, loading }
}
