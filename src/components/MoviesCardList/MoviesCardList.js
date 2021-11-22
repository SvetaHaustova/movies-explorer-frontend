import React from "react";
import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import { NOTHIHG_FOUND } from "../../utils/constants.js";

function MoviesCardList({
    movies,
    savedMovies,
    moviesShow,
    onAddMovies,
    checked,
    isWasRequest,
    nothingFoundServer,
    isBadServerRequest,
    onMovieLike,
    onMovieDelete
}) {
    const { pathname } = useLocation();
    const [moviesFilter, setMoviesFilter] = React.useState(movies);
    
    React.useEffect(() => {
        if (checked) {
            const moviesShorts = movies.filter((movie) => movie.duration <= 40);
            setMoviesFilter(moviesShorts);
        } else {
            setMoviesFilter(movies);
        }
    }, [checked, movies]);

    return (
        <section className="movies-cards">
            {moviesFilter.length > 0 ?
            (
                <ul className="movies-cards__list">
                {
                    moviesFilter.slice(0, moviesShow).map((movie) => (
                        <MoviesCard
                            key={movie.id ? movie.id : movie._id}
                            movie={movie}
                            savedMovies={savedMovies}
                            onMovieLike={onMovieLike}
                            onMovieDelete={onMovieDelete}
                        />
                    ))
                }
                </ul>
            ) : (
                    <p className={`movies-cards__nothing ${isWasRequest ? "" : "movies-cards_nothing_hiddden"}`}>{isBadServerRequest ? nothingFoundServer : NOTHIHG_FOUND}</p>
                )
            }
            {pathname === "/movies" ?
                <button className={`movies-cards__more-button ${((moviesShow >= moviesFilter.length) || (moviesShow >= movies.length)) && "movies-cards__more-button_hidden"}`}
                    type="button"
                    onClick={onAddMovies}>
                        Ещё
                </button> 
                : 
                <></>
            }
        </section>
    );
}

export default MoviesCardList;