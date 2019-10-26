import { h } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';
import Picture from '../picture';

const Events = () => (
  <section className={'section'}>
    <div className="container">
      <a name="eventos" />
      <div className="section-title">
        <h1 className="title" id="eventos">
          Eventos
        </h1>
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
              aria-label="Sitio del BurgerJS Santiago"
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
              aria-label="Github para Meetups de NoderJS"
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
              aria-label="Github para NodeSchool santiago"
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
              aria-label="Github del Eventloop 2016"
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
