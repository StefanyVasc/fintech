import { CSSProperties } from 'react'

export const SaleItemContainer: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'auto auto 1fr',
  gap: 'var(--gap)',
  marginBottom: 'var(--gap-s)',
  alignItems: 'center',
}

export const ItemLink: CSSProperties = {
  fontFamily: 'monospace',
  color: 'inherit',
}

export const ItemPrice: CSSProperties = {
  justifySelf: 'end',
}
