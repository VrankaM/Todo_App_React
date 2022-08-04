import './App.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { update } from './redux/todos'
import { useEffect } from 'react'
import Home from './pages/Home'
import Active from './pages/Active'
import Completed from './pages/Completed'
import SharedLayout from './components/SharedLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://62e7f7e793938a545bdd7fff.mockapi.io/todos').then((response) => {
        dispatch(update(response.data))
    })
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='all' element={<Home />} />
          <Route path='active' element={<Active />} />
          <Route path='completed' element={<Completed />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
