import "./FilterCheckbox.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function FilterCheckbox({ onSubmit, filmName, checkboxClickSave, checkboxMovieSave }) {
  if (localStorage.checkbox === undefined) {
    localStorage.checkbox = true;
  }
  const [checkboxMovie, setCheckboxMovie] = useState(localStorage.checkbox);
  const location = useLocation();
  const checkboxClick = () => {
    setCheckboxMovie(!checkboxMovie);
    if (!checkboxMovie === true) {
      localStorage.checkbox = true;
    } else {
      localStorage.checkbox = "";
    }
    onSubmit(filmName);
  };

  return (
    <div className="filter-checkbox filter-checkbox__container">
      {location.pathname === "/movies" && (
        <button
          type="button"
          className={
            !checkboxMovie
              ? "filter-checkbox__button"
              : "filter-checkbox__button_active"
          }
          onClick={checkboxClick}
        ></button>
      )}
            {location.pathname === "/saved-movies" && (
        <button
          type="button"
          className={
            !checkboxMovieSave
              ? "filter-checkbox__button"
              : "filter-checkbox__button_active"
          }
          onClick={checkboxClickSave}
        ></button>
      )}
      <p className="filter-checkbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
