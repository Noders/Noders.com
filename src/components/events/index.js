import { h } from 'preact';
import { Link } from 'preact-router';
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
          <Link href="/events/santiagojs">
            <img src="../../assets/images/meetupsjs.png" alt="santiagojs" />
          </Link>
        </figure>
      </div>
      <div className="level-item has-text-centered">
        <figure className={[style.eventImage, style.centerContent]}>
          <Link href="/events/nodeschool">
            <img src="../../assets/images/nodeschool.png" alt="nodeschoolsantiago" />
          </Link>
        </figure>
      </div>
      <div className="level-item has-text-centered">
        <figure className={style.eventImage}>
          <Link href="/events/eventloop">
            <img src="../../assets/images/eventloop.png" alt="eventloop" className={style.eventLoopLogo} />
          </Link>
        </figure>
      </div>
    </div>
  </section>
);

export default Events;
