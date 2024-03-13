import { useData } from '../hooks/useData'

export function Header() {
  const { data } = useData()

  return (
    <div>
      <span>Header</span>
    </div>
  )
}
