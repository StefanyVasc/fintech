import { DateRange } from './input/dateRange'
import { Months } from './months/months'

export function Header() {
  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
      </div>
      <Months />
    </header>
  )
}
