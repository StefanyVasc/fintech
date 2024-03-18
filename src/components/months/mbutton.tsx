import { useData } from '../../hooks/useData'
import { monthName } from '../../utils/monthName'
import { getNDaysAgo } from '../../utils/transformDate'
import * as S from './styles'

export function Mbutton({ n }: { n: number }) {
  const { setStart, setFinish } = useData()

  function formatDate(date: Date) {
    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const yyyy = date.getFullYear()
    return `${yyyy}-${mm}-${dd}`
  }

  function formatMonth(n: number) {
    const date = new Date()
    date.setMonth(date.getMonth() + n)

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    setStart(formatDate(firstDay))
    setFinish(formatDate(lastDay))
  }

  return (
    <button style={S.buttonStyle} onClick={() => formatMonth(n)}>
      {monthName(n)}
    </button>
  )
}
