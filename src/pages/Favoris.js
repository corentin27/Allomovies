import Navbar from "../components/Navbar";
import SearchMovies from "../components/SearchMovies";
import {useSelector} from "react-redux";
import React from "react";

function Favoris(props) {
    const fav = useSelector((state) => state.fav)

    console.log(fav)
    return (
        <div>
            <Navbar />
            <SearchMovies/>
            <h1>Je suis favori</h1>
            <div>{fav.map((f) => <div> {f.id}</div>)}</div>
        </div>
    )
}

export default Favoris;