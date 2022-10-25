import React from "react";
import {NavLink} from "react-router-dom";
import "./MovisList.css"

const API_IMG= "https://image.tmdb.org/t/p/w500/";

const MovieList = ({title, overview, poster_path, release_date, id}) => {

    return (
            <div className="card">
                <div className="card-container">
                    <img src={ API_IMG + poster_path } alt={title}/>
                    <div className="card-body">
                        <h2>{title}</h2>
                        <p>Date de sortie : {release_date}</p>
                        {/*<p>{overview}</p>*/}
                        <NavLink to={"/Details/" + id}>Détails</NavLink>
                    </div>
                </div>
            </div>
    )
}

export default MovieList;