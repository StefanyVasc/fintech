import { useData } from '../../hooks/useData'
import { SaleItem } from './saleItem'

export function Sales() {
  const { data } = useData()

  if (data === null) return null

  return (
    <ul>
      {data.map((sale) => (
        <li key={sale.id}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  )
}
