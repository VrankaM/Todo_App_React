import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Home from './pages/Home'
import Active from './pages/Active'
import Completed from './pages/Completed'
import SharedLayout from './components/SharedLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { updateTodos } from './utils/Utils'

function App() {

  const { limit } = useSelector((state) => state.limit) 
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(limit)
    updateTodos(limit, dispatch)
    // eslint-disable-next-line
  }, [limit])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='active' element={<Active />} />
          <Route path='completed' element={<Completed />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
