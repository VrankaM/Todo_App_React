import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Home from './pages/Home'
import Active from './pages/Active'
import Completed from './pages/Completed'
import Login from './pages/Login'
import SharedLayout from './components/SharedLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { updateTodos } from './utils/Utils'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  const { limit } = useSelector((state) => state.limit) 
  const dispatch = useDispatch()

  useEffect(() => {
    updateTodos(limit, dispatch)
    // eslint-disable-next-line
  }, [limit])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<SharedLayout />}>
            <Route path='home' element={<Home />} />
            <Route path='active' element={<Active />} />
            <Route path='completed' element={<Completed />} />
          </Route>
        </Route>  
      </Routes>
    </Router>
  )
}

export default App;
