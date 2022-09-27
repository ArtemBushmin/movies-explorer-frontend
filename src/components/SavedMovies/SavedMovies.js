import Header from '../Header/Header';
import HeaderMovies from '../Header/HeaderMovies/HeaderMovies';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';

function SavedMovies() {
  return (
    <main className='saved-movies'>
      <Header
        color={'header_black'}
        location={'header__container'}
      >
        <HeaderMovies />
      </Header>
      <SearchForm/>
      <MoviesCardList/>
      <Footer/>
    </main>
  );
}

export default SavedMovies;
