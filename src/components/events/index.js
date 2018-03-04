import { h } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';

const Events = () => (
  <section className={'section'}>
    <div className="container">
      <a name="eventos" />
      <div className="section-title">
        <h1 className="title">Eventos</h1>
        <hr />
      </div>
      <div class={classJoin('level', 'section-content')}>
        <div className="level-item has-text-centered">
          <figure className={style.eventImage}>
            <a href="https://github.com/Noders/Meetups" target="_blank" rel="noopener">
              <img src="../../assets/images/meetupsjs.png" alt="santiagojs" />
            </a>
          </figure>
        </div>
        <div className="level-item has-text-centered">
          <figure className={[style.eventImage, style.centerContent]}>
            <a href="https://github.com/nodeschool/santiago" target="_blank" rel="noopener">
              <img src="../../assets/images/nodeschool.png" alt="nodeschoolsantiago" />
            </a>
          </figure>
        </div>
        <div className="level-item has-text-centered">
          <figure className={style.eventImage}>
            <a href="https://github.com/Noders/eventloop" target="_blank" rel="noopener">
              <img src="../../assets/images/eventloop.png" alt="eventloop" className={style.eventLoopLogo} />
            </a>
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default Events;
