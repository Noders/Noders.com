import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import Icon from '../../assets/noders_icons/noders_white.svg';

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <nav class={style.nav}>
          <Link activeClassName={style.active} href="/">
            <img src={Icon} class={style.logoIcon} />
          </Link>
          <a href="#eventos">Eventos</a>
          <Link activeClassName={style.active} href="/media">Media</Link>
          <a href="#comunidad">Comunidad</a>
        </nav>
      </header>
    );
  }
}
