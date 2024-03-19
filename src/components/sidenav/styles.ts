import { CSSProperties } from 'react'

interface SidenavStyles {
  sidenavLi: CSSProperties
  sidenavSpan: CSSProperties
  sidenavLink: CSSProperties
}

const sidenavStyle: SidenavStyles = {
  sidenavLi: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--gap-s)',
  },

  sidenavSpan: {
    width: '2rem',
    height: '2rem',
    backgroundColor: 'var(--beige)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--gap)',
  },

  sidenavLink: {
    flex: '1',
    fontSize: '1.125rem',
    color: 'var(--brown)',
    padding: 'var(--gap-s) 0',
  },
}

export default sidenavStyle
