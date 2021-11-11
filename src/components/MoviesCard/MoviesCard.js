import "./MoviesCard.css";
import movie_image from "../../images/movie-image.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function MoviesCard() {
    const { pathname } = useLocation();
    const [isLiked, setIsLiked] = useState(false);
    const movieCardButtonClassName = `${pathname === "/movies" ? 
        `movie-card__like-button ${isLiked ? "movie-card__like-button_active" : ""}` : 
        "movie-card__delete-button"}`;

    const handleLikeClick = () => {
        setIsLiked(!isLiked)
    }

    return (
        <li className="movie-card">
            <img className="movie-card__image" src={movie_image} alt="Фото фильма" />
            <div className="movie-card__description">
                <p className="movie-card__title">33 слова о дизайне</p>
                <button className={movieCardButtonClassName} type="button" onClick={handleLikeClick}></button>
            </div>
            <p className="movie-card__duration">1ч42м</p>
        </li>
    );
}

export default MoviesCard;