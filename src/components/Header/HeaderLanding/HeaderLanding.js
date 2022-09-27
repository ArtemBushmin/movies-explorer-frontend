import { Link } from 'react-router-dom';
import './HeaderLanding.css';

function MainHeader() {
  return (
    <nav className='auth'>
      <ul className='auth__container'>
        <li className='auth__links'>
          <Link to='/signup' className='auth__registration'>
            Регистрация
          </Link>
        </li>
        <li className='auth__links'>
          <Link to='/signin' className='auth__login'>
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainHeader;
