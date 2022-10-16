import Header from "../Header/Header";
import "./Main.css";
import HeaderLanding from "../Header/HeaderLanding/HeaderLanding";
import Promo from "../Main/Promo/Promo";
import AboutProject from "../Main/AboutProject/AboutProject";
import Techs from "../Main/Techs/Techs";
import AboutMe from "../Main/AboutMe/AboutMe";
import Portfolio from "../Main/Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import HeaderMovies from "../Header/HeaderMovies/HeaderMovies";

function Main({ loggedIn }) {
  return (
    <>
      {loggedIn ? (
        <Header color={"header_black"} location={"header__container"}>
          <HeaderMovies />
        </Header>
      ) : (
        <Header color={"header_blue"} location={"header__container"}>
          <HeaderLanding />
        </Header>
      )}
      <main className="landing">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
