import { useState } from 'react'

import { DateInput } from './dateInput'

export function DateRange() {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Start"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <DateInput
        label="End"
        value={end}
        onChange={({ target }) => setEnd(target.value)}
      />
    </form>
  )
}
