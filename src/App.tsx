import { useEffect } from 'react'
import './App.scss'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard'


function App() {

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      window.location.href = '/dashboard'
    }
  }, [location])

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/add-todo" element={<EditTodo />} />
      <Route path="/view-task" element={<ViewTask />} /> */}
    </Routes>
  )
}

export default App