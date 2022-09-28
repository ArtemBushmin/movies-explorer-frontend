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
              target='_blank'
            >
              Статичный сайт
            </a>
            <a
              className='portfolio__cursor'
              href='https://github.com/ArtemBushmin/how-to-learn'
              target='_blank'
            />
          </li>
          <li className='portfolio__links'>
            <a
              className='portfolio__github'
              href='https://github.com/ArtemBushmin/russian-travel'
              target='_blank'
            >
              Адаптивный сайт
            </a>
            <a
              className='portfolio__cursor'
              href='https://github.com/ArtemBushmin/russian-travel'
              target='_blank'
            />
          </li>
          <li className='portfolio__links'>
            <a
              className='portfolio__github'
              href='https://github.com/ArtemBushmin/mesto'
              target='_blank'
            >
              Одностраничное приложение
            </a>
            <a
              className='portfolio__cursor'
              href='https://github.com/ArtemBushmin/mesto'
              target='_blank'
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
