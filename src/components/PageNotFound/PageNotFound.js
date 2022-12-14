import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className='page-not-found'>
      <h2 className='page-not-found__header'>404</h2>
      <p className='page-not-found__text'>Страница не найдена</p>
      <Link className='page-not-found__link' to={-1}>
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
