import {useEffect, useState} from 'react'
import './App.css';
import MovieCard from './MovieCard';
import searchicon from './search.svg'
const API_URL='https://www.omdbapi.com?apikey=d1d3c39c'


const App = () => {
    const [movies, setMovies] = useState([]);
    const [SearchTerm,setSearchTerm] = useState('')

    const SearchMovies =  async(title) => {
        const response = await fetch(`${API_URL}&s=${title }`);
        const data = await response.json();
        setMovies(data.Search)
    };

    useEffect(()=>{
        SearchMovies('superman');

    },[]);


    return(
        <div className='app'>
            <div className='navbar'>
                <div className='doctors'>
                    <h1>Doctors</h1>
                </div>

                <div className='Models'>
                    <h1>AI Models</h1>>
                </div>

            </div>
            <h1> MovieLand</h1>
            <div className='search'>
                <input placeholder='SEARCH FOR MOVIES' value ={SearchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img src ={searchicon} alt="search" onClick={()=> SearchMovies(SearchTerm)}></img>
            </div>

            {
                movies?.length > 0 
                ? (
                    <div className='container'>
                    { movies.map((movie1) => (
                    <MovieCard movie1={movie1} />)
                    )}
                 </div>
                ) :  (
                    <div className='empty'> 
                    <h2>No Movies Found</h2>
                    </div>
                )
            }

        </div>
    );

};

export default App;