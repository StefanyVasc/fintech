import React, { createContext, PropsWithChildren } from 'react'

import { useFetch } from '../hooks/useFetch'

type Sale = {
  id: string
  nome: string
  preco: number
  status: 'pago' | 'processando' | 'falha'
  pagamento: 'boleto' | 'cartao' | 'pix'
  data: string
  parcelas: number | null
}

type DataContextType = {
  loading: boolean
  error: string | null
  data: Sale[] | null
}

const DataContext = createContext<DataContextType | null>(null)

type DataContextProviderProps = PropsWithChildren

const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const { data, error, loading } = useFetch<Sale[]>(import.meta.env.VITE_URL)

  const values = {
    data,
    loading,
    error,
  }

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>
}

export { DataContext, DataContextProvider }
