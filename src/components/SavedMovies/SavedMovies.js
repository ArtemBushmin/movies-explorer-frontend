import Header from "../Header/Header";
import HeaderMovies from "../Header/HeaderMovies/HeaderMovies";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader/Preloader";
import { useState, useEffect } from "react";

function SavedMovies({
  movies,
  saveMovies,
  isErrorSave,
  isNotFoundSave,
  preloader,
  onSubmit,
  handleDeleteMovie,
}) {
  const [checkboxMovieSave, setCheckboxMovieSave] = useState(true);
  const [currentSaveMovies, setCurrentSaveMovies] = useState(saveMovies);
  const checkboxClickSave = () => {
    setCheckboxMovieSave(!checkboxMovieSave);
    setCurrentSaveMovies(() => {
      if (checkboxMovieSave === false) {
        return saveMovies;
      } else {
        return saveMovies.filter((item) => item.duration <= 40);
      }
    });
  };

  useEffect(() => {
    setCurrentSaveMovies(saveMovies);
  }, [saveMovies]);

  return (
    <main className="saved-movies">
      <Header color={"header_black"} location={"header__container"}>
        <HeaderMovies />
      </Header>
      <SearchForm
        onSubmit={onSubmit}
        isErrorSave={isErrorSave}
        isNotFoundSave={isNotFoundSave}
        checkboxClickSave={checkboxClickSave}
        checkboxMovieSave={checkboxMovieSave}
      />
      {preloader ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          saveMovies={currentSaveMovies}
          isErrorSave={isErrorSave}
          isNotFoundSave={isNotFoundSave}
          handleDeleteMovie={handleDeleteMovie}
        />
      )}
      <Footer />
    </main>
  );
}

export default SavedMovies;
