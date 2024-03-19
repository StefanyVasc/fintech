import { CSSProperties } from 'react'

export const loading: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '300px',
}

export const spin: CSSProperties = {
  border: 'var(--gap-s) solid var(--coffee)',
  borderRightColor: 'var(--beige)',
  width: 'var(--gap)',
  height: 'var(--gap)',
  borderRadius: '50%',
  animation: 'spin 1s infinite',
}
