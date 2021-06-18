import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useState } from "react";

type Callback <T> = () => Promise<AxiosResponse<T>>

export function useRequest<T>(callback: Callback<T>) {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    async function load() {
      const { data } = await callback()
      setData(data)
    }
    load()
  }, [])

  return { data, setData }
}
