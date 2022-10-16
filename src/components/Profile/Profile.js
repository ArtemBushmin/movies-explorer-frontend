import "./Profile.css";
import Header from "../Header/Header";
import HeaderMovies from "../Header/HeaderMovies/HeaderMovies";
import { useContext } from "react";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import { CurrentUserContext } from "../../context/context";

function Profile({ updateUser, onSignOut, isMessageProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const controlError = useFormWithValidation();
  const { name, email } = controlError.errors;

  const handleSubmit = (e) => {
    e.preventDefault();
    let { name, email } = controlError.values;
    if (controlError.values.name === undefined) {
      name = currentUser.name;
    }
    if (controlError.values.email === undefined) {
      email = currentUser.email;
    }
    updateUser(name, email);
    controlError.resetForm();
  };

  return (
    <>
      <Header color={"header_black"} location={"header__container"}>
        <HeaderMovies />
      </Header>
      <main className="profile-page">
        <div className="profile-page__container">
          <h1 className="profile-page__header">Привет, {currentUser.name}!</h1>
          <form
            className="profile-page__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <label className="profile-page__input-container">
              <span className="profile-page__input-name">Имя</span>
              <input
                type="text"
                className="profile-page__input"
                name="name"
                required="{true}"
                placeholder=''
                pattern="[A-Za-zА-Яа-яЁё\s-]+"
                onChange={controlError.handleChange}
                value={controlError?.values?.name ?? currentUser.name}
              />
            </label>
            <span
              className={
                !controlError.isValid
                  ? "profile__error profile__error_visible"
                  : "profile__error"
              }
            >
              {name}
            </span>
            <label className="profile-page__input-container">
              <span className="profile-page__input-name">E-mail</span>
              <input
                type="email"
                className="profile-page__input"
                name="email"
                placeholder=''
                required="{true}"
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                onChange={controlError.handleChange}
                value={controlError?.values?.email ?? currentUser.email}
              />
            </label>
            <span
              className={
                !controlError.isValid
                  ? "profile__error profile__error_visible"
                  : "profile__error"
              }
            >
              {email}
            </span>
            <ul className="profile-page__action">
              <span
                className={
                  isMessageProfile
                    ? "profile__error profile__error_visible"
                    : "profile__error"
                }
              >
                Изменение данных прошло успешно!
              </span>
              <li className="profile-page__item">
                <button
                  className="profile-page__edit"
                  type="submit"
                  disabled={!controlError.isValid}
                >
                  Редактировать
                </button>
              </li>
              <li className="profile-page__item">
                <button className="profile-page__logout" onClick={onSignOut}>
                  Выйти из аккаунта
                </button>
              </li>
            </ul>
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;
