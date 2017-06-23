import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<nav>
					<Link activeClassName={style.active} href="/">Eventos</Link>
					<Link activeClassName={style.active} href="/profile">Media</Link>
					<Link activeClassName={style.active} href="/profile/john">Comunidad</Link>
				</nav>
			</header>
		);
	}
}
