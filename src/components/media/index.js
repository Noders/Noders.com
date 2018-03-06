import { h } from 'preact';
import style from './style';
import nodersYoutube from '../../assets/images/youtube-noders.png';
import nodersCast from '../../assets/images/podcast-noders.png';
import { classJoin } from '../../helpers';

const Media = () => (
  <section className={'section'}>
    <div className="container">
      <a name="media" />
      <div className="section-title">
        <h1 className="title">Media</h1>
        <hr />
      </div>
      <div class={classJoin('level', 'section-content')}>
        <div className="level-item has-text-centered">
          <figure>
            <a href="https://www.youtube.com/c/Noders" target="_blank" rel="noopener" className={style}>
              <img src={nodersYoutube} class={style.image} alt="youtube" />
              <h3 class={style.imageTitle}> YouTube </h3>
            </a>
          </figure>
        </div>
        <div className="level-item has-text-centered">
          <figure>
            <a href="https://www.youtube.com/playlist?list=PLBEwfn9JYDc-8LKrnlcogwrILF08EqLHF" target="_blank" rel="noopener" className={style}>
              <img src={nodersCast} class={style.image} alt="NodersCast" credits="podcast by Nate Eul from the Noun Project" />
              <h3 class={style.imageTitle}> NodersCast </h3>
            </a>
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default Media;
