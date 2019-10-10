import { h } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';
import Picture from '../picture';

const Media = () => (
  <section className={'section'}>
    <div className="container">
      <a name="media" />
      <div className="section-title">
        <h1 className="title">Media</h1>
        <hr />
      </div>
      <div className={classJoin('level', 'section-content')}>
        <div className="level-item has-text-centered">
          <figure>
            <a
              href="https://www.youtube.com/c/Noders"
              target="_blank"
              rel="noopener"
              className={style}
            >
              <Picture
                imageName="youtube-noders.png"
                className={style.image}
                alt="youtube"
              />
              <h3 className={style.imageTitle}> YouTube </h3>
            </a>
          </figure>
        </div>
        <div className="level-item has-text-centered">
          <figure>
            <a
              href="http://www.noders.fm"
              target="_blank"
              rel="noopener"
              className={style}
            >
              <Picture
                imageName="podcast-noders.png"
                className={style.image}
                alt="youtube"
              />
              <h3 className={style.imageTitle}> NodersCast </h3>
            </a>
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default Media;
