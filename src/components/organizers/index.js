import { h } from 'preact';
import style from './style';
import members from './members';
import { classJoin } from '../../helpers';
import Picture from '../picture';

const Organizers = () => (
  <section className={classJoin('section', style.section)}>
    <div className="container">
      <a name="comunidad" />
      <div className="section-title">
        <h1 className="title">Organizadores</h1>
        <hr />
      </div>
      <div
        class={classJoin('level', 'section-content', style.organizersContainer)}
      >
        {members.map(member => (
          <div
            className={classJoin(
              'level-item',
              'has-text-centered',
              style.organizer
            )}
          >
            <figure>
              <a
                target="_blank"
                aria-label={`Perfil de Twitter de ${member.twitter}`}
                href={`https://twitter.com/${member.twitter}`}
                rel="noopener"
              >
                <Picture
                  imageName={member.image}
                  folder="organizers"
                  className={style.memberImage}
                  alt={`Perfil de Twitter de ${member.twitter}`}
                />
              </a>
              <p className={style.memberInfo}>
                <a href={`https://twitter.com/${member.twitter}`}>
                  @{member.username}
                </a>
              </p>
            </figure>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Organizers;
