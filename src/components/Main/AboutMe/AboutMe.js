import './AboutMe.css';
import photoMe from '../../../images/photo_me.jpg';

function AboutMe() {
  return (
    <section className='profile'>
      <div className='profile__container'>
        <h2 className='profile__header'>Студент</h2>
        <div className='profile__container-info'>
          <div className='profile__data'>
            <h3 className='profile__name'>Виталий</h3>
            <p className='profile__profession'>
              Фронтенд-разработчик, 30 лет
            </p>
            <p className='profile__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              className='profile__link'
              href='https://github.com/ArtemBushmin'
              target='_blank'
            >
              Github
            </a>
          </div>
          <img className='profile__photo' src={photoMe} alt='Фотография' />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
