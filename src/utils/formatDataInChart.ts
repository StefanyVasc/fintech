import { Sale } from '../context/DataContext'

type SalePerDay = {
  data: string
  pago: number
  processando: number
  falha: number
}

export function transformData(data: Sale[]): SalePerDay[] {
  const days = data.reduce((acc: { [key: string]: SalePerDay }, item) => {
    const day = item.data.split(' ')[0]

    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      }
    }

    acc[day][item.status] += item.preco

    return acc
  }, {})

  return Object.values(days).map((day) => ({
    ...day,
    data: day.data.substring(5),
  }))
}
