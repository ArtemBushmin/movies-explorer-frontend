import './Movies.css';
import Header from '../Header/Header';
import HeaderMovies from '../Header/HeaderMovies/HeaderMovies';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Movies/Preloader/Preloader/Preloader';

function Movies({
  onSubmit,
  movies,
  saveMovies,
  isError,
  isNotFound,
  preloader,
  handleSaveMovie,
}) {
  return (
    <main className='movies'>
      <Header
        color={'header_black'}
        location={'header__container'}
      >
        <HeaderMovies />
      </Header>
      <SearchForm
        onSubmit={onSubmit}
        isError={isError}
        isNotFound={isNotFound}
      />
      {preloader ?
      (<Preloader/>)
      :
      (<MoviesCardList
        movies={movies}
        saveMovies={saveMovies}
        isError={isError}
        isNotFound={isNotFound}
        handleSaveMovie={handleSaveMovie}
      />)
      }

      <Footer />
    </main>
  );
}

export default Movies;
