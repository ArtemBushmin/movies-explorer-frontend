import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form action='#' className='search-form__form'>
          <input type='text' className='search-form__input' placeholder='Фильм' />
          <button type='submit' className='search-form__button'>Найти</button>
        </form>
        <FilterCheckbox/>
      </div>
    </section>
  );
}

export default SearchForm;
