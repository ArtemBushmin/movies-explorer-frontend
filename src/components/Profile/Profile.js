import './Profile.css';
import Header from '../Header/Header';
import HeaderMovies from '../Header/HeaderMovies/HeaderMovies';

function Profile() {
  return (
    <>
      <Header
        color={'header_black'}
        location={'header__container'}
      >
        <HeaderMovies/>
      </Header>
      <main className='profile-page'>
        <div className='profile-page__container'>
          <h1 className='profile-page__header'>Привет, Виталий!</h1>
          <form className='profile-page__form'>
            <label className='profile-page__input-container'>
              <span className='profile-page__input-name'>Имя</span>
              <input
                type='text'
                className='profile-page__input'
                name='name'
                placeholder='Виталий'
              />
            </label>
            <label className='profile-page__input-container'>
              <span className='profile-page__input-name'>E-mail</span>
              <input
                type='email'
                className='profile-page__input'
                name='email'
                placeholder='pochta@yandex.ru'
              />
            </label>
          </form>
          <ul className='profile-page__action'>
            <li className='profile-page__item'>
              <button className='profile-page__edit'>Редактировать</button>
            </li>
            <li className='profile-page__item'>
              <button className='profile-page__logout'>Выйти из аккаунта</button>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Profile;
