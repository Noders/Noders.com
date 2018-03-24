import { h, Component } from 'preact';
import style from './style';
import members from './members';
import { classJoin } from '../../helpers';
import Picture from '../picture';

class Organizers extends Component {
  getOrganizerSocial = member => {
    if (member.github) {
      return {
        label: `Perfil de Github de ${member.github}`,
        href: `https://github.com/${member.github}`
      };
    }
    return {
      label: `Perfil de Twitter de ${member.twitter}`,
      href: `https://twitter.com/${member.twitter}`
    };
  };

  renderOrganizers = () => {
    return members.map(member => {
      const { label, href } = this.getOrganizerSocial(member);
      return (
        <div
          className={classJoin(
            'level-item',
            'has-text-centered',
            style.organizer
          )}
        >
          <figure>
            <a target="_blank" aria-label={label} href={href} rel="noopener">
              <Picture
                imageName={member.image}
                folder="organizers"
                className={style.memberImage}
                alt={label}
              />
            </a>
            <p className={style.memberInfo}>
              <a href={href}>@{member.username}</a>
            </p>
          </figure>
        </div>
      );
    });
  };

  render() {
    return (
      <section className={classJoin('section', style.section)}>
        <div className="container">
          <a name="comunidad" />
          <div className="section-title">
            <h1 className="title">Organizadores</h1>
            <hr />
          </div>
          <div
            class={classJoin(
              'level',
              'section-content',
              style.organizersContainer
            )}
          >
            {this.renderOrganizers()}
          </div>
        </div>
      </section>
    );
  }
}

export default Organizers;
