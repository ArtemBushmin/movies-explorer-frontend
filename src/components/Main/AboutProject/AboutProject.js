import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project'>
      <div className='project__container'>
        <h2 className='project__header'>О проекте</h2>
        <ul className='project__data'>
          <li className='project__item'>
            <h3 className='project__item-title'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='project__item-text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className='project__item'>
            <h3 className='project__item-title'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='project__item-text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <ul className='project__progress'>
          <li className='project__progress-item'>
            <p className='project__progress-back'>1 неделя</p>
            <p className='progect__progress-name'>Back-end</p>
          </li>
          <li className='project__progress-item'>
            <p className='project__progress-front'>4 недели</p>
            <p className='progect__progress-name'>Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;
