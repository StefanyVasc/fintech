import { ComponentProps } from 'react'

import * as S from './styles'

type DateInputProps = ComponentProps<'input'> & {
  label: 'Start' | 'End'
}

export function DateInput({ label, ...props }: DateInputProps) {
  return (
    <div>
      <label style={S.labelStyle} htmlFor={label}>
        {label}
      </label>
      <input
        style={S.inputStyle}
        type="date"
        name={label}
        id={label}
        {...props}
      />
    </div>
  )
}
