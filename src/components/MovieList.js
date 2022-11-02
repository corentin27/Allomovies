import React from "react";
import {NavLink} from "react-router-dom";
import "./MovisList.css"
import {useDispatch} from "react-redux";

const API_IMG= "https://image.tmdb.org/t/p/w500/";

const MovieList = ({title, overview, poster_path, release_date, id}) => {

    const dispatch = useDispatch();
    const addFav = () => dispatch({
        type: "fav/addFav",
        payload: id
    })

    return (
            <div className="card">
                <div className="card-container">
                    <img src={ API_IMG + poster_path } alt={title}/>
                    <div className="card-body">
                        <h2>{title}</h2>
                        <p>Date de sortie : {release_date}</p>
                        {/*<p>{overview}</p>*/}
                        <NavLink to={"/Details/" + id}>Détails</NavLink>
                        <button onClick={addFav}>Ajouter</button>
                    </div>
                </div>
            </div>
    )
}

export default MovieList;