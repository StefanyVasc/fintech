import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { DateRange } from '../input/dateRange'
import { Months } from '../months'
import * as S from './styles'

export function Header() {
  const [title, setTitle] = useState('Summary')
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setTitle('Summary')
        document.title = 'Fintech | Summary'
        break

      case '/sales':
        setTitle('Sales')
        document.title = 'Fintech | Sales'
        break
    }
  }, [location])

  return (
    <header className="mb">
      <div style={S.dateRangeStyle} className="daterange mb">
        <DateRange />
        <h1 className="box bg-cream">{title}</h1>
      </div>
      <Months />
    </header>
  )
}
