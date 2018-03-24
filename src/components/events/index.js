import { h } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';
import Picture from '../picture';

const Events = () => (
  <section className={'section'}>
    <div className="container">
      <a name="eventos" />
      <div className="section-title">
        <h1 className="title">Eventos</h1>
        <hr />
      </div>
      <div class={classJoin('level', 'section-content', style.events)}>
        <div
          className={classJoin(
            'level-item has-text-centered',
            style.eventContainer
          )}
        >
          <figure className={style.eventImage}>
            <a
              href="https://twitter.com/BurgerJSStgo"
              target="_blank"
              rel="noopener"
            >
              <Picture imageName="burgerjs.png" alt="burgerjssantiago" />
            </a>
          </figure>
        </div>
        <div
          className={classJoin(
            'level-item has-text-centered',
            style.eventContainer
          )}
        >
          <figure className={style.eventImage}>
            <a
              href="https://github.com/Noders/Meetups"
              target="_blank"
              rel="noopener"
            >
              <Picture imageName="meetupsjs.png" alt="santiagojs" />
            </a>
          </figure>
        </div>
        <div
          className={classJoin(
            'level-item has-text-centered',
            style.eventContainer
          )}
        >
          <figure className={style.eventImage}>
            <a
              href="https://github.com/nodeschool/santiago"
              target="_blank"
              rel="noopener"
            >
              <Picture imageName="nodeschool.png" alt="nodeschoolsantiago" />
            </a>
          </figure>
        </div>
        <div
          className={classJoin(
            'level-item has-text-centered',
            style.eventContainer
          )}
        >
          <figure className={style.eventImage}>
            <a
              href="https://github.com/Noders/eventloop"
              target="_blank"
              rel="noopener"
            >
              <Picture imageName="eventloop.png" alt="eventloop" />
            </a>
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default Events;
