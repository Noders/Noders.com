import { h } from 'preact';
import style from './style';
import Icon from '../../assets/noders_icons/noders_white.svg';

const Header = () => (
  <header class={style.header}>
    <nav class={style.nav}>
      <a class={style.active} href="#home">
        <img src={Icon} alt="Logo Noders" class={style.logoIcon} />
      </a>
      <a href="#eventos">Eventos</a>
      <a href="#media">Media</a>
      <a href="#comunidad">Comunidad</a>
    </nav>
  </header>
);

export default Header;
