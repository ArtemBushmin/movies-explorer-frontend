import "./Login.css";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/useFormWithValidation";

function Login({ onLogin, isLoginMessage, isErrorLoginBtn }) {
  const controlError = useFormWithValidation();
  const { email, password } = controlError.errors;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = controlError.values;
    onLogin(email, password);
    controlError.resetForm();
  };

  return (
    <>
      <main className="login">
        <header className="login__header">
          <Link to="/" className="login__logo"></Link>
          <h2 className="login__header">Рады видеть!</h2>
        </header>
        <form
          className="login__form"
          action="#"
          onSubmit={handleSubmit}
          noValidate
        >
          <fieldset className="login__fieldset">
            <label className="login__fieldset-label">
              <span className="login__name">E-mail</span>
              <input
                type="email"
                placeholder="pochta@yandex.ru"
                className="login__input"
                name="email"
                autoComplete="off"
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                onChange={controlError.handleChange}
                value={controlError?.values?.email || ""}
                required
              />
              <span
                className={
                  !controlError.isValid
                    ? "login__error login__error_visible"
                    : "login__error"
                }
              >
                {email}
              </span>
            </label>
            <label className="login__fieldset-label">
              <span className="login__name">Пароль</span>
              <input
                type="password"
                className="login__input"
                name="password"
                autoComplete="off"
                onChange={controlError.handleChange}
                value={controlError?.values?.password || ""}
                required
              />
              <span
                className={
                  !controlError.isValid
                    ? "login__error login__error_visible"
                    : "login__error"
                }
              >
                {password}
              </span>
            </label>
            <span
              className={
                isErrorLoginBtn
                  ? "login__error login__error_visible"
                  : "login__error"
              }
            >
              {isLoginMessage}
            </span>
            <button
              type="submit"
              className="login__submit-button"
              disabled={!controlError.isValid}
            >
              Войти
            </button>
          </fieldset>
        </form>
        <div className="login__question">
          <p className="login__question-text">Еще не зарегистрированы?</p>
          <Link to="/signup" className="login__register">
            Регистрация
          </Link>
        </div>
      </main>
    </>
  );
}

export default Login;
