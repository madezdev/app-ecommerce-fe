import useSWR from 'swr'

// 📌 Fetcher para SWR (fuera del componente para optimización)
const fetcher = (url: string) => fetch(url).then(res => res.json())

export function useExchangeRate () {
  const { data, error, isLoading } = useSWR('https://criptoya.com/api/dolar', fetcher, {
    dedupingInterval: 3600000, // 1 hora sin re-fetch
    revalidateOnFocus: false,   // No recargar al volver al foco
    revalidateOnReconnect: true // Recargar al reconectar
  })

  return {
    exchangeRate: data?.blue?.ask,
    loading: isLoading,
    error
  }
}
