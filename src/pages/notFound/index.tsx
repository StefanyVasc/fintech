import { styles } from './styles'

export function NotFound() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>404 - Not Found</h2>
      <p style={styles.message}>The page you are looking for does not exist.</p>
    </div>
  )
}
