import { useData } from '../../hooks/useData'
import { SaleItem } from './saleItem'
import { SalesList } from './styles'

export function Sales() {
  const { data } = useData()

  if (data === null) return null

  return (
    <ul style={SalesList}>
      {data.map((sale) => (
        <li key={sale.id}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  )
}
