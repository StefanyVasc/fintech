import { ComponentProps } from 'react'

type DateInputProps = ComponentProps<'input'> & {
  label: 'Start' | 'End'
}

export function DateInput({ label, ...props }: DateInputProps) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="date" name={label} id={label} {...props} />
    </div>
  )
}
