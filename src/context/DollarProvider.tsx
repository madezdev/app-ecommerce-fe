'use client'

import { useDolarStore } from '@/store/dolar.store'
import { createContext, useContext, useEffect } from 'react'
import useSWR from 'swr'

// 📌 Tipo del contexto
interface DollarContextType {
  exchangeRate: number | null
  loading: boolean
  error: string | null
}

// 📌 Crear el contexto
const DollarContext = createContext<DollarContextType | undefined>(undefined)

// 📌 Fetcher para SWR (fuera del componente para optimización)
const fetcher = (url: string) => fetch(url).then(res => res.json())

// 📌 Provider con SWR y Zustand
export const DollarProvider = ({ children }: { children: React.ReactNode }) => {
  const setDolarBlue = useDolarStore(state => state.setDolarBlue)
  const dolarBlue = useDolarStore(state => state.dolarBlue)

  // ⬇️ Fetch con SWR
  const { data, error, isLoading } = useSWR('https://criptoya.com/api/dolar', fetcher, {
    dedupingInterval: 3600000, // 1 hora sin re-fetch
    revalidateOnFocus: false,   // No recargar al volver al foco
    revalidateOnReconnect: true // Recargar al reconectar
  })

  // ⬇️ Solo actualizar Zustand cuando el valor cambie
  useEffect(() => {
    if (data?.blue?.ask && data.blue.ask !== dolarBlue) {
      setDolarBlue(data.blue.ask)
    }
  }, [data, dolarBlue, setDolarBlue])

  return (
    <DollarContext.Provider value={{ exchangeRate: dolarBlue, loading: isLoading, error }}>
      {children}
    </DollarContext.Provider>
  )
}

// 📌 Hook para consumir el contexto
export const useDollar = () => {
  const context = useContext(DollarContext)
  if (!context) {
    throw new Error('useDollar debe ser usado dentro de DollarProvider')
  }
  return context
}
