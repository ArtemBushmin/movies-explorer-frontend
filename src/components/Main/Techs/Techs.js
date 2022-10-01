import './Techs.css';

function Techs() {
  return (
    <section className='technologies'>
      <div className='technologies__container'>
        <h2 className='technologies__header'>Технологии</h2>
        <div className='technologies__text-container'>
          <h3 className='technologies__text-header'>7 технологий</h3>
          <p className='technologies__text'>
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
          <ul className='technologies__list-container'>
            <li className='technologies__technology'>
              <p className='technologies__technology-name'>HTML</p>
            </li>
            <li className='technologies__technology'>
              <p className='technologies__technology-name'>CSS</p>
            </li>
            <li className='technologies__technology'>
              <p className='technologies__technology-name'>JS</p>
            </li>
            <li className='technologies__technology'>
              <p className='technologies__technology-name'>React</p>
            </li>
            <li className='technologies__technology'>
              <p className='technologies__technology-name'>Git</p>
            </li>
            <li className='technologies__technology'>
              <p className='technologies__technology-name'>Express.js</p>
            </li>
            <li className='technologies__technology'>
              <p className='technologies__technology-name'>mongoDB</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
