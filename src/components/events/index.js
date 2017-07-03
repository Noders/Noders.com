import { h } from 'preact';
import style from './style';

const Events = () => (
  <section className="section-container">
    <div className="section-title">
      <h1 className="title">Eventos</h1>
      <hr />
    </div>
    <div className="level">
      <div className="level-item has-text-centered">
        <figure className={style.eventImage}>
          <a href="https://github.com/Noders/Meetups" target="_blank">
            <img src="../../assets/images/meetupsjs.png" alt="santiagojs" />
          </a>
        </figure>
      </div>
      <div className="level-item has-text-centered">
        <figure className={[style.eventImage, style.centerContent]}>
          <a href="https://github.com/nodeschool/santiago" target="_blank">
            <img src="../../assets/images/nodeschool.png" alt="nodeschoolsantiago" />
          </a>
        </figure>
      </div>
      <div className="level-item has-text-centered">
        <figure className={style.eventImage}>
          <a href="https://github.com/Noders/eventloop" target="_blank">
            <img src="../../assets/images/eventloop.png" alt="eventloop" className={style.eventLoopLogo} />
          </a>
        </figure>
      </div>
    </div>
  </section>
);

export default Events;
