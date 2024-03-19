import { useState } from 'react'

import { DateRange } from '../input/dateRange'
import { Months } from '../months'
import * as S from './styles'

export function Header() {
  const [title, setTitle] = useState('Summary')

  return (
    <header className="mb">
      <div style={S.dateRangeStyle} className="mb">
        <DateRange />
        <h1 className="box bg-cream">{title}</h1>
      </div>
      <Months />
    </header>
  )
}
