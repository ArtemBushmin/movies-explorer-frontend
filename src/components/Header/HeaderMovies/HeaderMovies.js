import { Link } from "react-router-dom";
import "./HeaderMovies.css";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function HeaderMovies() {
  const [burgerState, setBurgerState] = useState(true);
  const handleBurgerMenu = () => {
    setBurgerState(!burgerState);
  };

  return (
    <>
      <nav className="navigate">
        <ul className="navigate__list">
          <li className="navigate__link">
            <Link to="/movies" className="navigate__movies">
              Фильмы
            </Link>
          </li>
          <li className="navigate__link">
            <Link to="/saved-movies" className="navigate__movies-save">
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link to="/profile" className="navigate__account">
          Аккаунт
        </Link>
        <button className="navigate__icon" onClick={handleBurgerMenu}></button>
        <BurgerMenu burgerState={burgerState} closeMenu={handleBurgerMenu} />
      </nav>
    </>
  );
}

export default HeaderMovies;
