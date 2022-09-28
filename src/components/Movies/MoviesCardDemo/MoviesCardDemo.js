import './MoviesCardDemo.css';

function MoviesCard() {
  return (
    <li className='movie-card__card'>
      <div className='movie-card__image' />
      <button className='movie-card__button-demo' type='button'></button>
      <div className='movie-card__signature'>
        <h2 className='movie-card__name'>33 слова о дизайне</h2>
        <div className='movie-card__time'>1ч 17м</div>
      </div>
    </li>
  );
}

export default MoviesCard;
