import './App.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { update } from './redux/todos'
import { toggle } from './redux/limit'
import { useEffect } from 'react'
import Home from './pages/Home'
import Active from './pages/Active'
import Completed from './pages/Completed'
import SharedLayout from './components/SharedLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const { limit } = useSelector((state) => state.limit) 
  const dispatch = useDispatch()


  useEffect(() => {
    console.log(limit)
    axios.get("https://62e7f7e793938a545bdd7fff.mockapi.io/todos", {
      params:{
        page: 1,
        limit: limit 
      }
    }).then((res) => {
        dispatch(update(res.data))
        dispatch(toggle())
    }).catch((err) => {
      console.log(err)
      alert("An error occured while fetching todo data")
    })
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
