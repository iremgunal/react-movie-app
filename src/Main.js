import axios from 'axios';
import React, { useState } from 'react'
import MovieCard from './MovieCard';


const apiUrl = 'https://www.omdbapi.com/?';
const apiKey = 'apikey=c2996e1e';


const Main = () => {
    const [name, setName] = useState("");
    const [movies, setMovies] = useState([]);
    const [isActive, setActive] = useState(false);

    const getInfo = () => {
        axios
            .get(apiUrl + `s=${name}&` + apiKey)
            .then((res) => {
                if (res) {
                    setMovies(res.data.Search)
                }
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setActive(!isActive);
        getInfo();
    };

   


    return (

        
       
                <div className={isActive ? 'main-active' : 'main'}>
                <form>
                    <div className='searchBar'>
                        <label htmlFor='name'></label>
                        <input
                            type='text'
                            name='name'
                            placeholder='search movie'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button className='searchBtn' type='submit' onClick={(e) => handleSubmit(e)} >
                            Search
                        </button>
                    </div>
                </form>
                {movies.length > 0 ? (
                    <div className='container'>
                        {
                            movies.map((movie) => (<MovieCard movie={movie} />
                            ))}
                    </div>

                ) : (
                    <div className='empty'>
                        <h2> </h2>
                    </div>
                )}
            </div>
     
    )
}

export default Main