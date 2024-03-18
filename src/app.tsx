import './styles/app.css'

import { Header } from './components/header'
import { Sidenav } from './components/sidenav'
import { DataContextProvider } from './context/DataContext'
import { Sales } from './pages/sales'
import { Summary } from './pages/summary'

export function App() {
  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Header />
          <Summary />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  )
}
