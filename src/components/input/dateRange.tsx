import { useData } from '../../hooks/useData'
import { DateInput } from './dateInput'

export function DateRange() {
  const { start, finish, setFinish, setStart } = useData()

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Start"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <DateInput
        label="End"
        value={finish}
        onChange={({ target }) => setFinish(target.value)}
      />
    </form>
  )
}
