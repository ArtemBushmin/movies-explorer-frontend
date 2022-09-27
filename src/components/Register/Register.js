import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <main className='register'>
        <header className='register__header'>
          <Link to='/' className='register__logo'></Link>
          <h2 className='register__header'>Добро пожаловать!</h2>
        </header>
        <form className='register__form'>
          <fieldset className='register__fieldset'>
            <label className='register__fieldset-label'>
              <span className='register__name'>Имя</span>
              <input
                type='text'
                placeholder='Виталий'
                className='register__input'
              />
            </label>
            <label className='register__fieldset-label'>
              <span className='register__name'>E-mail</span>
              <input
                type='email'
                placeholder='pochta@yandex.ru'
                className='register__input'
              />
            </label>
            <label className='register__fieldset-label'>
              <span className='register__name'>Пароль</span>
              <input
                type='password'
                placeholder='Пароль'
                className='register__input'
              />
              <span className='register__error'>Что-то пошло не так...</span>
            </label>
            <button type='submit' className='register__submit-button'>
              Зарегистрироваться
            </button>
          </fieldset>
        </form>
        <div className='register__question'>
          <p className='register__question-text'>Уже зарегистрированы?</p>
          <Link to='/signin' className='register__login'>
            Войти
          </Link>
        </div>
      </main>
    </>
  );
}

export default Register;
