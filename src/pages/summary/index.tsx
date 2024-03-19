import { Chart } from '../../components/charts'
import { useData } from '../../hooks/useData'
import * as S from './styles'

export function Summary() {
  const { data } = useData()

  if (data === null) return null

  return (
    <section>
      <div style={S.summaryStyle} className="flex mb">
        <div className="box">
          <h2 style={S.summaryH2}>Sales Amount</h2>
          <span>
            {data
              .filter((item) => item.status !== 'falha')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>

        <div className="box">
          <h2 style={S.summaryH2}>Received</h2>
          <span>
            {data
              .filter((item) => item.status === 'pago')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>

        <div className="box">
          <h2 style={S.summaryH2}>To Receive</h2>
          <span>
            {data
              .filter((item) => item.status === 'processando')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <Chart data={data} />
      </div>
    </section>
  )
}
