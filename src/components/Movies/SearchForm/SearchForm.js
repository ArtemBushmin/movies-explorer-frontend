import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ onSubmit, isError, isNotFound, checkboxMovieSave, checkboxClickSave }) {
  const location = useLocation();
  if (localStorage.filmName === undefined || isError || isNotFound) {
    localStorage.setItem("filmName", "");
  }
  let currentFilmName = "";
  if (location.pathname === "/movies") {
    currentFilmName = localStorage.filmName;
  }
  const [filmName, setFilmName] = useState(currentFilmName);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [checkbox, setCheckbox] = useState(localStorage.checkbox);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsFormValid(evt.target.closest("form").checkValidity());
    if (!isFormValid) {
      return setErrorText("Нужно ввести ключевое слово");
    }
    onSubmit(filmName);
  };

  const handleChange = (evt) => {
    setIsFormValid(evt.target.closest("form").checkValidity());
    setFilmName(evt.target.value);
    if (location.pathname === "/movies") {
      localStorage.filmName = evt.target.value;
    }
  };

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form
          action="#"
          noValidate
          className="search-form__form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            required
            className="search-form__input"
            placeholder="Фильм"
            value={filmName}
            onChange={handleChange}
          />
          <button type="submit" className="search-form__button">
            Найти
          </button>
        </form>
        <span className="search__error">{!isFormValid && errorText}</span>
        <FilterCheckbox
          onSubmit={onSubmit}
          filmName={filmName}
          checkboxClickSave={checkboxClickSave}
          checkboxMovieSave={checkboxMovieSave}
        />
      </div>
    </section>
  );
}

export default SearchForm;
