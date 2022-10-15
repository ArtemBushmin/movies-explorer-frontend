import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function MoviesCard({
  name,
  duration,
  thumbnail,
  trailerLink,
  handleSaveMovie,
  movie,
  handleDeleteMovie,
  saveMovies,
}) {
  const [iconState, setIconState] = useState(saveMovies.some((m) => m.movieId === movie.id));
  const location = useLocation();
  let hours = Math.floor(duration / 60);
  let minutes = Math.floor(duration - hours * 60);

  const handleButtonClick = () => {
    console.log(iconState);
    if (iconState) {
      handleDeleteMovie(movie);
    } else {
      handleSaveMovie(movie);
    }
    setIconState(!iconState);
  };

  const handleButtonDelete = () => {
    handleDeleteMovie(movie);
  };

  return (
    <li className="movie-card__card">
      <a
        href={trailerLink}
        className="movie-card__trailer-link"
        target="_blank"
        rel="noreferrer"
      >
        <div
          className="movie-card__image"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
      </a>
      {location.pathname === "/movies" && (
        <button
          className={iconState ? "movie-card__button_save" : "movie-card__button"}
          type="button"
          onClick={handleButtonClick}
        >
          {iconState ? '' : "Сохранить"}
        </button>
      )}
      {location.pathname === "/saved-movies" && (
        <button
          className="movie-card__button_delete"
          type="button"
          onClick={handleButtonDelete}
        ></button>
      )}
      <div className="movie-card__signature">
        <h2 className="movie-card__name">{name}</h2>
        <div className="movie-card__time">
          {hours}ч{minutes}м
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
