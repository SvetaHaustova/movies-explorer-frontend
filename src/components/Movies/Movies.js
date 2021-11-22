import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import useResizeWindow from "../../hooks/useResizeWindow";

function Movies({
    loggedIn,
    isLoading,
    movies,
    savedMovies,
    onSearchMovies,
    nothingFoundServer,
    isBadServerRequest,
    isWasRequest,
    onMovieLike,
    onMovieDelete,
    checked,
    onChangeСheckbox
}) {
    const size = useResizeWindow();
    const [moviesShow, setMoviesShow] = React.useState(0);
	const [moviesAdd, setMoviesAdd] = React.useState(0);

    React.useEffect(() => {
		if (size > 1024) {
			setMoviesShow(12);
			setMoviesAdd(4);
		} else if (size > 800) {
			setMoviesShow(9);
			setMoviesAdd(3);
		} else if (size > 600) {
			setMoviesShow(8);
			setMoviesAdd(2);
		} else {
			setMoviesShow(5);
			setMoviesAdd(2);
		}
	}, [size])

    function handleAddMovies() {
		setMoviesShow(moviesShow + moviesAdd);
	}

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <SearchForm
                    onSearchMovies={onSearchMovies}
                    checked={checked}
                    onChangeСheckbox={onChangeСheckbox}
                />
                {isLoading ?
                    <Preloader />
                    :
                    <MoviesCardList
                        movies={movies}
                        savedMovies={savedMovies}
                        moviesShow={moviesShow}
                        onAddMovies={handleAddMovies}
                        checked={checked}
                        isBadServerRequest={isBadServerRequest}
                        nothingFoundServer={nothingFoundServer}
                        isWasRequest={isWasRequest}
                        onMovieLike={onMovieLike}
                        onMovieDelete={onMovieDelete}
                    />
                }
            </main>
            <Footer />
        </>
    );
}

export default Movies;