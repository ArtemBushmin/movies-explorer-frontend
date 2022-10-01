import './Movies.css';
import Header from '../Header/Header';
import HeaderMovies from '../Header/HeaderMovies/HeaderMovies';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import BurgerMenu from '../Header/BurgerMenu/BurgerMenu';

function Movies() {
  return (
    <main className='movies'>
      <Header
        color={'header_black'}
        location={'header__container'}
      >
        <HeaderMovies />
      </Header>
      <SearchForm />
      <MoviesCardList/>
      <Footer />
      <BurgerMenu />
    </main>
  );
}

export default Movies;
