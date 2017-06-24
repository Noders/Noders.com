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
					<Link activeClassName={style.active} href="/Eventos">Eventos</Link>
					<Link activeClassName={style.active} href="/profile">Media</Link>
					<Link activeClassName={style.active} href="/profile/john">Comunidad</Link>
				</nav>
			</header>
		);
	}
}
