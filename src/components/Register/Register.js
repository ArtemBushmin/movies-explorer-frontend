import "./Register.css";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/useFormWithValidation";

function Register({ onRegister, isErrorRegisterBtn, isRegisterMessage }) {
  const controlError = useFormWithValidation();
  const { name, email, password } = controlError.errors;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = controlError.values;
    onRegister(name, email, password);
    controlError.resetForm();
  };

  return (
    <>
      <main className="register">
        <header className="register__header">
          <Link to="/" className="register__logo"></Link>
          <h2 className="register__header">Добро пожаловать!</h2>
        </header>
        <form
          className="register__form"
          action="#"
          onSubmit={handleSubmit}
          noValidate
        >
          <fieldset className="register__fieldset">
            <label className="register__fieldset-label">
              <span className="register__name">Имя</span>
              <input
                type="text"
                placeholder="Имя"
                className="register__input"
                name="name"
                autoComplete="off"
                pattern="[A-Za-zА-Яа-яЁё\s-]+"
                onChange={controlError.handleChange}
                value={controlError?.values?.name || ''}
                required
              />
              <span
                className={
                  !controlError.isValid
                    ? "register__error register__error_visible"
                    : "register__error"
                }
              >
                {name}
              </span>
            </label>
            <label className="register__fieldset-label">
              <span className="register__name">E-mail</span>
              <input
                type="email"
                placeholder="pochta@yandex.ru"
                className="register__input"
                name="email"
                autoComplete="off"
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                onChange={controlError.handleChange}
                value={controlError?.values?.email || ''}
                required
              />
              <span
                className={
                  !controlError.isValid
                    ? "register__error register__error_visible"
                    : "register__error"
                }
              >
                {email}
              </span>
            </label>
            <label className="register__fieldset-label">
              <span className="register__name">Пароль</span>
              <input
                type="password"
                placeholder="Пароль"
                className="register__input"
                name="password"
                autoComplete="off"
                onChange={controlError.handleChange}
                value={controlError?.values?.password || ''}
                required
              />
              <span
                className={
                  !controlError.isValid
                    ? "register__error register__error_visible"
                    : "register__error"
                }
              >
                {password}
              </span>
            </label>
            <span
              className={
                isErrorRegisterBtn
                  ? "register__error register__error_visible"
                  : "register__error"
              }
            >
              {isRegisterMessage}
            </span>
            <button
              type="submit"
              className="register__submit-button"
              disabled={!controlError.isValid}
            >
              Зарегистрироваться
            </button>
          </fieldset>
        </form>
        <div className="register__question">
          <p className="register__question-text">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__login">
            Войти
          </Link>
        </div>
      </main>
    </>
  );
}

export default Register;
