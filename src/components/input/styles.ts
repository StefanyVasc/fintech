import { CSSProperties } from 'react'

const generalStyle: CSSProperties = {
  fontSize: '1rem',
  color: 'var(--coffee)',
  padding: 'var(--gap-s) .75rem',
  backgroundColor: 'var(--beige)',
  borderRadius: 'var(--gap)',
}

const labelStyle: CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: '600',
  ...generalStyle,
}

const inputStyle: CSSProperties = {
  border: 'none',
  fontFamily: 'monospace',
  ...generalStyle,
}

export { inputStyle, labelStyle }
