import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardDemo from '../MoviesCardDemo/MoviesCardDemo';
import MoviesCardDemo1 from '../MoviesCardDemo1/MoviesCardDemo1';

function MoviesCardList() {
  return (
    <section className='movies-list'>
      <ul className='movies-list__container'>
        <MoviesCard/>
        <MoviesCardDemo/>
        <MoviesCardDemo1/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
      </ul>
      <button type='button' className='movies-list__button'>
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
