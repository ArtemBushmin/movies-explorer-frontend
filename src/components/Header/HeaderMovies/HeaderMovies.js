import { Link } from 'react-router-dom';
import './HeaderMovies.css';

function HeaderMovies() {
  return (
    <>
      <nav className='navigate'>
        <ul className='navigate__list'>
          <li className='navigate__link'>
            <Link to='/movies' className='navigate__movies'>
              Фильмы
            </Link>
          </li>
          <li className='navigate__link'>
            <Link to='/saved-movies' className='navigate__movies-save'>
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link to='/profile' className='navigate__account'>
          Аккаунт
        </Link>
        <button
          className='navigate__icon'
        ></button>
      </nav>
    </>
  );
}

export default HeaderMovies;
