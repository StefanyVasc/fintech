import { useParams } from 'react-router-dom'

import { Loading } from '../../components/loading'
import { Sale as SaleType } from '../../context/DataContext'
import { useFetch } from '../../hooks/useFetch'

type SaleUnity = Omit<SaleType, 'data'>

export function Sale() {
  const { saleId } = useParams()
  const { data, loading } = useFetch<SaleUnity>(
    `${import.meta.env.VITE_URL}${saleId}`,
  )

  if (loading) return <Loading />

  if (data === null) return null

  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">Método de pagamento: {data.pagamento}</div>
      {data.parcelas !== null && (
        <div className="box mb">Parcelas: {data.pagamento}</div>
      )}
      <div className="box mb">
        Preço: {''}
        {data.preco.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
    </div>
  )
}
