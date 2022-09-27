import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__header'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__links'>
            <a
              className='portfolio__github'
              href='https://github.com/ArtemBushmin/how-to-learn'
            >
              Статичный сайт
            </a>
            <a
              className='portfolio__cursor'
              href='https://github.com/ArtemBushmin/how-to-learn'
            />
          </li>
          <li className='portfolio__links'>
            <a
              className='portfolio__github'
              href='https://github.com/ArtemBushmin/russian-travel'
            >
              Адаптивный сайт
            </a>
            <a
              className='portfolio__cursor'
              href='https://github.com/ArtemBushmin/russian-travel'
            />
          </li>
          <li className='portfolio__links'>
            <a
              className='portfolio__github'
              href='https://github.com/ArtemBushmin/mesto'
            >
              Одностраничное приложение
            </a>
            <a
              className='portfolio__cursor'
              href='https://github.com/ArtemBushmin/mesto'
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
