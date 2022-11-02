import Navbar from "../components/Navbar";
import SearchMovies from "../components/SearchMovies";
import {NavLink, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

const API_IMG= "https://image.tmdb.org/t/p/w500/";
const Details = () => {
    /* Je recupère mon ID en Paramètre (URL)*/
    let movieId = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=7852554c50acaf2521b9f96c170fb91a`)
            .then((res) => res.json())
            .then(data =>{
                setMovie(data)
            })
    })

    const {title, poster_path, overview,release_date} = movie;

    return (
        <div>
            <Navbar />
            <SearchMovies/>
            <h1>{title}</h1>
            <img src={ API_IMG + poster_path} alt={title}/>
            <p>Date de sortie : {release_date}</p>
            <p>{overview}</p>
            <NavLink to={"/"}>Retour à l'accueil</NavLink>
        </div>
    )
}
export default Details;