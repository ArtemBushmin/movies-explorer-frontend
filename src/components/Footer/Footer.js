import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <h3 className='footer__header'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className='footer__date'>
          <p className='footer__year'>© 2022</p>
          <ul className='footer__links'>
            <li className='footer__item'>
              <a
                href='https://practicum.yandex.ru/'
                className='footer__link'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__item'>
              <a
                href='https://github.com/ArtemBushmin'
                className='footer__link'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
