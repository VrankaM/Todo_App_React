import { useDispatch, useSelector } from 'react-redux'
import { update } from '../redux/search'

function Search(){

    const { searchValue } = useSelector((state) => state.search)
    const dispatch = useDispatch()

    function getSearch(e){
        e.preventDefault()
        dispatch(update(e.target.search.value))
    }

    function cancelSearch(){
        dispatch(update(""))
    }

    return(
        <div className="search">
            <form action="" onSubmit={(e) => getSearch(e)}>
                <label htmlFor="search">Search in list:</label>
                <input type="text" name="search" id="search"/>
                <input type="submit" value="Search" />
            </form>
            <button onClick={cancelSearch}>Cancel</button>
            <h1>{ searchValue }</h1>
        </div>
    )
}

export default Search