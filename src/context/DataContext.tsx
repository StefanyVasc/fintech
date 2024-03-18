import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useState,
} from 'react'

import { useFetch } from '../hooks/useFetch'
import { getNDaysAgo } from '../utils/transformDate'

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
  start: string
  setStart: Dispatch<React.SetStateAction<string>>
  finish: string
  setFinish: Dispatch<React.SetStateAction<string>>
}

const DataContext = createContext<DataContextType | null>(null)

type DataContextProviderProps = PropsWithChildren

const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [start, setStart] = useState(getNDaysAgo(7))
  const [finish, setFinish] = useState(getNDaysAgo(0))

  const { data, error, loading } = useFetch<Sale[]>(
    `${import.meta.env.VITE_URL}?inicio=${start}&final=${finish}`,
  )

  const values = {
    data,
    loading,
    error,
    start,
    setStart,
    finish,
    setFinish,
  }

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>
}

export { DataContext, DataContextProvider }
