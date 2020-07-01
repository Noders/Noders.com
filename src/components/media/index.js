import { h } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';
import Picture from '../picture';

const Image = ({ imageName, alt, link, title }) => (
  <div className="level-item has-text-centered">
    <figure>
      <a href={link} target="_blank" rel="noopener" className={style}>
        <Picture imageName={imageName} className={style.image} alt={alt} />
        <h3 className={style.imageTitle}>{title}</h3>
      </a>
    </figure>
  </div>
);

const Media = () => (
  <section className={'section'}>
    <div className="container">
      <a name="media" />
      <div className="section-title">
        <h1 className="title">Media</h1>
        <hr />
      </div>

      <div
        className={classJoin('level', 'section-content', style.levelContainer)}
      >
        <Image
          imageName="logo-podcast.png"
          link="https://www.noders.fm"
          alt="Podcast"
          title="Noderscast"
        />
        <Image
          imageName="logo-discord.png"
          link="https://noders.live/discord"
          alt="Discord"
          title="Discord"
        />
        <Image
          imageName="logo-youtube.png"
          link="https://www.youtube.com/c/Noders"
          alt="Youtube"
          title="Youtube"
        />
      </div>
    </div>
  </section>
);

export default Media;
