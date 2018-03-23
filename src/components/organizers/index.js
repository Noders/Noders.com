import { h } from 'preact';
import style from './style';
import members from '../../assets/data/members';
import { classJoin } from '../../helpers';

let getOrganizerSocial = (member) => {
  if (member.github) {
    return {
      label: `Perfil de Github de ${member.github}`,
      href: `https://github.com/${member.github}`
    }
  }
  return {
    label: `Perfil de Twitter de ${member.twitter}`,
    href: `https://twitter.com/${member.twitter}`
  }
}

const Organizers = () => (
  <section className={classJoin('section', style.section)}>
    <div className="container">
      <a name="comunidad" />
      <div className="section-title">
        <h1 className="title">Organizadores</h1>
        <hr />
      </div>
      <div class={classJoin('level', 'section-content', style.organizersContainer)}>
        {members.map((member) =>
          (<div className={classJoin('level-item', 'has-text-centered', style.organizer)}>
            <figure>
              <a target="_blank" aria-label={getOrganizerSocial(member).label} href={getOrganizerSocial(member).href} rel="noopener"><img src={`../../assets/images/organizers/${member.image}`} alt={getOrganizerSocial(member).label} className={style.memberImage} /></a>
              <p className={style.memberInfo}><a href={getOrganizerSocial(member).href}>@{member.username}</a></p>
            </figure>
          </div>)
        )}
      </div>
    </div>
  </section>
);

export default Organizers;
