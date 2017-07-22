import { h } from 'preact';
import style from './style';
import members from '../../assets/data/members';
import { classJoin } from '../../helpers';

const Organizers = () => (
  <section className={classJoin('section', style.section)}>
    <div className="container">
      <a name="comunidad" />
      <div className="section-title">
        <h1 className="title">Organizadores</h1>
        <hr />
      </div>
      <div class={classJoin('level', 'section-content')}>
        {members.map((member) =>
          (<div className="level-item has-text-centered">
            <figure>
              <a href={`https://twitter.com/${member.twitter}`}><img src={`${member.image}`} className={style.memberImage} /></a>
              <p className={style.memberInfo}><a href={`https://twitter.com/${member.twitter}`}>@{member.username}</a></p>
            </figure>
          </div>)
        )}
      </div>
    </div>
  </section>
);

export default Organizers;
