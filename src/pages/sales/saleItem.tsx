import { Sale } from '../../context/DataContext'
import * as S from './styles'

export function SaleItem({ sale }: { sale: Sale }) {
  return (
    <div style={S.SaleItemContainer} className="box">
      <a href="" style={S.ItemLink}>
        {sale.id}
      </a>
      <div>{sale.nome}</div>
      <div style={S.ItemPrice}>
        {sale.preco.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  )
}
