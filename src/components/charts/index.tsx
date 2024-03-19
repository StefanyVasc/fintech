import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { Sale } from '../../context/DataContext'
import { transformData } from '../../utils/formatDataInChart'

export function Chart({ data }: { data: Sale[] }) {
  const transformedData = transformData(data)

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#8036bd" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#18bbed"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#fb3347"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
