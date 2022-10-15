import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function MoviesCardList({
  movies,
  isError,
  isNotFound,
  saveMovies,
  isErrorSave,
  isNotFoundSave,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  if (movies.length > 0 || isError || isNotFound) {
    if (localStorage.checkbox === "true") {
      localStorage.setItem("movies", JSON.stringify(movies));
    } else {
      localStorage.setItem(
        "movies",
        JSON.stringify(movies.filter((item) => item.duration <= 40))
      );
    }
  }
  if (localStorage.movies === undefined) {
    localStorage.setItem("movies", JSON.stringify([]));
  }
  const [currentMovies, setCurrentMovies] = useState(
    JSON.parse(localStorage.getItem("movies"))
  );
  const [openMovies, setOpenMovies] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  );
  const [stepMovies, setStepMovies] = useState(0);
  const location = useLocation();
  let blockType = location.pathname === "/movies";
  let textError = isError ? "movies-list__error_visible" : "movies-list__error";
  let notFound =
    isNotFound && !isError
      ? "movies-list__not-found_visible"
      : "movies-list__not-found";
  let textErrorSave = isErrorSave
    ? "movies-list__error_visible"
    : "movies-list__error";
  let notFoundSave =
    isNotFoundSave && !isErrorSave
      ? "movies-list__not-found_visible"
      : "movies-list__not-found";
  const handleDownloadMovies = () => {
    setOpenMovies((movies) => movies + stepMovies);
  };

  useEffect(() => {
    if (windowWidth <= 480) {
      setOpenMovies(5);
      setStepMovies(2);
    } else if (windowWidth <= 1279 && windowWidth > 480) {
      setOpenMovies(8);
      setStepMovies(2);
    } else if (windowWidth >= 1280) {
      setOpenMovies(12);
      setStepMovies(3);
    }
  }, []);

  return (
    <section className="movies-list">
      {blockType ? (
        <>
          <ul className="movies-list__container">
            {currentMovies.slice(0, openMovies).map((movie) => {
              return (
                <MoviesCard
                  key={movie.id}
                  name={movie.nameRU}
                  duration={movie.duration}
                  trailerLink={movie.trailerLink}
                  thumbnail={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`}
                  handleSaveMovie={handleSaveMovie}
                  movie={movie}
                  saveMovies={saveMovies}
                />
              );
            })}
          </ul>
          <h2 className={notFound}>Ничего не найдено</h2>
          <h2 className={textError}>
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </h2>
          <button
            type="button"
            className={
              !(currentMovies.length > 3) || openMovies >= currentMovies.length
                ? "movies-list__button_visible"
                : "movies-list__button"
            }
            onClick={handleDownloadMovies}
          >
            Еще
          </button>
        </>
      ) : (
        <>
          <ul className="movies-list__container">
            {saveMovies.map((movie) => {
              return (
                <MoviesCard
                  key={movie._id}
                  name={movie.nameRU}
                  duration={movie.duration}
                  trailerLink={movie.trailerLink}
                  thumbnail={movie.thumbnail}
                  handleDeleteMovie={handleDeleteMovie}
                  movie={movie}
                  saveMovies={saveMovies}
                />
              );
            })}
          </ul>
          <h2 className={notFoundSave}>Ничего не найдено</h2>
          <h2 className={textErrorSave}>
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </h2>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
