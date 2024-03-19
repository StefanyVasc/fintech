import { NavLink } from 'react-router-dom'

import { Sale } from '../../context/DataContext'
import * as S from './styles'

export function SaleItem({ sale }: { sale: Sale }) {
  return (
    <div style={S.SaleItemContainer} className="box">
      <NavLink to={`/sales/${sale.id}`} style={S.ItemLink}>
        {sale.id}
      </NavLink>
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
