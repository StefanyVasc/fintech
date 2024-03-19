import './styles/app.css'

import { Outlet } from 'react-router-dom'

import { Header } from './components/header'
import { Sidenav } from './components/sidenav'
import { DataContextProvider } from './context/DataContext'

export function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Outlet />
        </main>
      </div>
    </DataContextProvider>
  )
}
