import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <main className='login'>
        <header className='login__header'>
          <Link to='/' className='login__logo'></Link>
          <h2 className='login__header'>Рады видеть!</h2>
        </header>
        <form className='login__form'>
          <fieldset className='login__fieldset'>
            <label className='login__fieldset-label'>
              <span className='login__name'>E-mail</span>
              <input
                type='email'
                placeholder='pochta@yandex.ru'
                className='login__input'
              />
            </label>
            <label className='login__fieldset-label'>
              <span className='login__name'>Пароль</span>
              <input
                type='password'
                className='login__input'
              />
            </label>
            <button type='submit' className='login__submit-button'>
              Войти
            </button>
          </fieldset>
        </form>
        <div className='login__question'>
          <p className='login__question-text'>Еще не зарегистрированы?</p>
          <Link to='/signup' className='login__register'>
            Регистрация
          </Link>
        </div>
      </main>
    </>
  );
}

export default Login;
