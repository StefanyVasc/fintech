import { useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError()

  if (!error) {
    return <div>No error occurred.</div>
  }

  return (
    <div>
      <h2>Error</h2>
      <p>{error.toString()}</p>
    </div>
  )
}
