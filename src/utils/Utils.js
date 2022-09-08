import axios from 'axios'
import { update } from '../redux/todos'
import { toggle } from '../redux/limit'


export function updateTodos(limit, dispatch){
    
    axios.get("https://62e7f7e793938a545bdd7fff.mockapi.io/todos", {
      params:{
        page: 1,
        limit: limit
        // sortBy=createdAt&order=desc
      }
    }).then((res) => {
        dispatch(update(res.data))
        dispatch(toggle())
    }).catch((err) => {
      console.log(err)
      alert("An error occured while fetching todo data")
    })
}
