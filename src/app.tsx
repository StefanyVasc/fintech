import './styles/app.css'

import { Header } from './components/header'
import { Sidenav } from './components/sidenav'
import { DataContextProvider } from './context/DataContext'
import { Summary } from './pages/summary'

export function App() {
  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Header />
          <Summary />
        </main>
      </div>
    </DataContextProvider>
  )
}
