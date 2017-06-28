import { h } from 'preact';
import { Link } from 'preact-router';
import style from './style';
import members from '../../assets/data/members';

const Community = (props, context) =>
  (
    <section className="section-container">
      <div className="section-title">
        <h1 className="title">Comunidad</h1>
        <hr />
      </div>
      <div className="level">
      {members.map((member) =>
        (<div className="level-item has-text-centered">
          <figure>
          <a href={`https://twitter.com/${member.twitter}`}><img src={`${member.image}`} className={style.memberImage} /></a>
          <p className={style.memberInfo}><a href={`https://twitter.com/${member.twitter}`}>@{member.username}</a></p>
        </figure>
        </div>)
      )}
      </div>
    </section>
  );

export default Community;
