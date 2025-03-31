import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface DolarStore {
  dolarBlue: number | null
  setDolarBlue: (_value: number | null) => void
}
export const useDolarStore = create<DolarStore>()(
  persist(
    (set) => ({
      dolarBlue: null,
      setDolarBlue: (_value) => set({ dolarBlue: _value })
    }),
    {
      name: 'dolar-storage'
    }
  )
)