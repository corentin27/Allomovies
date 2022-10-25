import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import {useEffect, useState} from "react";
import SearchMovies from "../components/SearchMovies";
import './Accueil.css';
const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=7852554c50acaf2521b9f96c170fb91a";

function Accueil (){

    const [movies, setMovies]=useState([]);

    useEffect(()=> {
        fetch(API_URL)
            .then((res)=> res.json())
            .then(data=> {
                setMovies(data.results)
            })
    }, [])

    return (
        <div>
            <Navbar />
            <SearchMovies/>
            <h1>je suis accueil</h1>
            <div className="container">
                {movies.map((movieParam) => <MovieList key={movieParam.id} {...movieParam}/>)}
            </div>
        </div>
    );
}
export default Accueil;