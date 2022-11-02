import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import {useEffect, useState} from "react";
import SearchMovies from "../components/SearchMovies";
import './Accueil.css';
import ReactPaginate from "react-paginate";


function Accueil (){

    const [movies, setMovies]=useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=> {
        const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=7852554c50acaf2521b9f96c170fb91a&page=${currentPage}`;
        fetch(API_URL)
            .then((res)=> res.json())
            .then(data=> {
                setMovies(data.results)
                setTotalPages(data.total_pages)
            })
    }, [currentPage])

    const handlePageClick = (event) => {
        /* Avec l'event je lui donne la nouvelle page (newPage) */
        const newPage = (event.selected) + 1;
        setCurrentPage(newPage)
    }
    return (
        <div>
            <Navbar />
            <SearchMovies setMovies={setMovies}/>
            <h1>je suis accueil</h1>
            <div className="container">
                {movies.map((movieParam) => <MovieList key={movieParam.id} {...movieParam}/>)}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={"container-pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-link"}
                nextClassName={"page-link"}
                breakClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    );
}
export default Accueil;