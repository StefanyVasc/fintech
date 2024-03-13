import { Header } from './components/header'
import { Sidenav } from './components/sidenav'
import { Summary } from './pages/summary'

export function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Summary />
      </main>
    </div>
  )
}
