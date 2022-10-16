import { Link } from "react-router-dom";
import "./BurgerMenu.css";

function BurgerMenu({ burgerState, closeMenu }) {
  return (
    <div
      className={
        burgerState ? "burger-menu" : "burger-menu burger-menu_visible"
      }
    >
      <div className="burger-menu__container">
        <button
          className="burger-menu__close"
          type="button"
          onClick={closeMenu}
        />
        <nav className="burger-menu__navigator">
          <Link to="/" className="burger-menu__link">
            Главная
          </Link>
          <Link to="/movies" className="burger-menu__link">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="burger-menu__link">
            Сохраненные фильмы
          </Link>
        </nav>
        <div className="burger-menu__profile">
          <Link to="/profile" className="navigate__account-burger">
            Аккаунт
          </Link>
          <button className="navigate__icon-burger"></button>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
