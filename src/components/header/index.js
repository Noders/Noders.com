import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import Icon from '../../assets/noders_icons/noders_white.svg';

const Header = () => (
  <header class={style.header}>
    <nav class={style.nav}>
      <Link activeClassName={style.active} href="/">
        <img src={Icon} class={style.logoIcon} />
      </Link>
      <a href="#eventos">Eventos</a>
      <a href="#media">Media</a>
      <a href="#comunidad">Comunidad</a>
    </nav>
  </header>
);

export default Header;
