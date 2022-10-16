import "./App.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../context/context";
import * as auth from "../../utils/auth";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [moviesRes, setMoviesRes] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isErrorSave, setIsErrorSave] = useState(false);
  const [isNotFoundSave, setIsNotFoundSave] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const [isErrorRegisterBtn, setIsErrorRegisterBtn] = useState(false);
  const [isRegisterMessage, setRegisterMessage] = useState(false);
  const [isLoginMessage, setLoginMessage] = useState(false);
  const [isErrorLoginBtn, setIsErrorLoginBtn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isMessageProfile, setIsMessageProfile] = useState(false);
  const [saveMovies, setSaveMovies] = useState([]);

  if (localStorage.saveError === undefined) {
    localStorage.saveError = false;
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then((res) => {
          setSaveMovies(res);
        })
        .catch((err) => {
          setIsErrorSave(true);
          setSaveMovies([]);
          console.log(err);
        });
    }
  }, [loggedIn]);

  const onLogin = (email, password) => {
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.jwt) {
          localStorage.setItem("jwt", res.jwt);
          setIsErrorLoginBtn(false);
          auth.checkToken(res.jwt).then((res) => {
            if (res) {
              setTimeout(() => navigate("/movies"), 1000);
              setLoggedIn(true);
            }
          });
          auth
            .getUserInfo()
            .then((data) => {
              setCurrentUser(data);
            })
            .catch((err) => {
              console.error(`Данные пользователя не получены: ${err}`);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        if (err === "Ошибка: 401") {
          setLoginMessage("Вы ввели неправильный логин или пароль.");
        } else {
          setLoginMessage("Что-то пошло не так...");
        }
        setIsErrorLoginBtn(true);
      });
  };

  const onRegister = (name, email, password) => {
    auth
      .register(name, email, password)
      .then((data) => {
        if (data) {
          onLogin(email, password);
        }
        setIsErrorRegisterBtn(false);
      })
      .catch((err) => {
        err === "Ошибка: 409"
          ? setRegisterMessage("Пользователь с таким email уже зарегистрирован")
          : setRegisterMessage(
              "При регистрации пользователя произошла ошибка."
            );
        setIsErrorRegisterBtn(true);
      });
  };

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            navigate(location.pathname);
          }
        })
        .catch((err) => {
          onSignOut();
          console.error(err);
        });
    }
  };

  const onSignOut = () => {
    localStorage.clear();
    navigate("/");
    setLoggedIn(false);
    setCurrentUser({});
    setIsErrorRegisterBtn(false);
    setRegisterMessage(false);
    setLoginMessage(false);
    setIsErrorLoginBtn(false);
    setIsError(false);
    setIsErrorSave(false);
    setMoviesRes([]);
    setPreloader(false);
    setIsNotFound(false);
    setIsNotFoundSave(false);
    setIsMessageProfile(false);
  };

  const updateUser = (name, email) => {
    auth
      .updateUserInfo(name, email)
      .then((data) => {
        setIsMessageProfile(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setTimeout(() => setIsMessageProfile(false), 1000);
      });
  };

  const handleSearchMovies = (name) => {
    if (localStorage.allMovies === undefined) {
      moviesApi
      .getAllMovies()
      .then((movies) => {
          localStorage.setItem("allMovies", JSON.stringify(movies));
      })
      .then(() => {
        findMovies(name);
      })
      .catch((err) => {
        setIsError(true);
        setMoviesRes([]);
        console.log(err);
      });
    } else {
      findMovies(name);
    }
  };

  const findMovies = (name) => {
    setPreloader(true);
    const searchRes = searchMovies(
      JSON.parse(localStorage.getItem("allMovies")),
      name
    );
    setIsError(false);
    setMoviesRes(searchRes);
    setIsNotFound(!searchRes.length);
    setTimeout(() => setPreloader(false), 1000);
  }

  const handleSearchSaveMovies = (name) => {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        setPreloader(true);
        const userSaveMovies = movies.filter((movie) => {
          return movie.owner === currentUser._id;
        });
        const searchRes = searchMovies(userSaveMovies, name);
        setSaveMovies(searchRes);
        setIsNotFoundSave(!searchRes.length);
        setTimeout(() => setPreloader(false), 1000);
      })
      .catch((err) => {
        setIsErrorSave(true);
        setSaveMovies([]);
        console.log(err);
      });
  };

  const searchMovies = (movies, name) => {
    return movies.filter((item) =>
      item.nameRU.toLowerCase().includes(name.toLowerCase())
    );
  };

  const handleSaveMovie = (movie) => {
    mainApi
      .addMovie(movie)
      .then((data) => {
        setSaveMovies([data, ...saveMovies]);
      })
      .catch((err) => {
        if (err === "Ошибка: 400") {
          alert("Произошла ошибка. Невозможно сохранить фильм.");
          localStorage.saveError = true;
        }
        console.log(err);
      });
  };

  const handleDeleteMovie = (movie) => {
    let savedMovie;
    if (movie.movieId) {
      savedMovie = saveMovies.find((item) => item.movieId === movie.movieId);
    } else {
      savedMovie = saveMovies.find((item) => item.movieId === movie.id);
    }

    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = saveMovies.filter(
          (item) => item._id !== savedMovie._id
        );

        setSaveMovies(newMoviesList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies
                    onSubmit={handleSearchMovies}
                    movies={moviesRes}
                    saveMovies={saveMovies}
                    isError={isError}
                    isNotFound={isNotFound}
                    preloader={preloader}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                  ></Movies>
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <SavedMovies
                    movies={moviesRes}
                    saveMovies={saveMovies}
                    preloader={preloader}
                    isErrorSave={isErrorSave}
                    isNotFoundSave={isNotFoundSave}
                    onSubmit={handleSearchSaveMovies}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Profile
                    updateUser={updateUser}
                    onSignOut={onSignOut}
                    isMessageProfile={isMessageProfile}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  onRegister={onRegister}
                  isErrorRegisterBtn={isErrorRegisterBtn}
                  isRegisterMessage={isRegisterMessage}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  onLogin={onLogin}
                  isLoginMessage={isLoginMessage}
                  isErrorLoginBtn={isErrorLoginBtn}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
