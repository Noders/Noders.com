import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import Icon from '../../assets/noders_icons/noders_white.svg';

const Header = () => (
  <header class={style.header}>
    <nav class={style.nav}>
      <a class={style.active} href="#home">
        <img src={Icon} class={style.logoIcon} />
      </a>
      <a href="#eventos">Eventos</a>
      <a href="#media">Media</a>
      <a href="#comunidad">Comunidad</a>
    </nav>
  </header>
);

export default Header;
