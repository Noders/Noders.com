import { h } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';

const Events = () => (
  <section className={classJoin('section', style.section)}>
    <div className="container">
      <a name="eventos" />
      <div className="section-title">
        <h1 className="title">Eventos</h1>
        <hr />
      </div>
      <div class={classJoin('level', 'section-content', style.events)}>
        <div className={classJoin("level-item has-text-centered", style.eventContainer)}>
          <figure className={style.eventImage}>
            <a href="https://twitter.com/BurgerJSStgo" target="_blank" rel="noopener">
              <img src="../../assets/images/burgerjs.png" alt="burgerjssantiago" />
            </a>
          </figure>
        </div>
        <div className={classJoin("level-item has-text-centered", style.eventContainer)}>
          <figure className={style.eventImage}>
            <a href="https://github.com/Noders/Meetups" target="_blank" rel="noopener">
              <img src="../../assets/images/meetupsjs.png" alt="santiagojs" />
            </a>
          </figure>
        </div>        
        <div className={classJoin("level-item has-text-centered", style.eventContainer)}>
          <figure className={style.eventImage}>
            <a href="https://github.com/nodeschool/santiago" target="_blank" rel="noopener">
              <img src="../../assets/images/nodeschool.png" alt="nodeschoolsantiago" />
            </a>
          </figure>
        </div>
        <div className={classJoin("level-item has-text-centered", style.eventContainer)}>
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
