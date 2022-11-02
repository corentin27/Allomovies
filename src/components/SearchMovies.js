import React, {useState} from "react";


const SearchMovies = ({setMovies}) => {

    const [query, setQuery] = useState("")

    const searchMovie = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=7852554c50acaf2521b9f96c170fb91a&query=${query}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
    };

    const handleChange = (e) => {
            setQuery(e.target.value)
    }
    /*console.log(this.state.search)*/
    return (
        <div>
            <form onSubmit={searchMovie}>
                <input type="search" value={query} onChange={handleChange} placeholder="Rechercher"/>
                <button type="submit">Recherche</button>
                {/*{movies.map((moviesParam) => <MovieList key={moviesParam.id} {...moviesParam}/>)}*/}
            </form>
        </div>
    )
}

export default SearchMovies;