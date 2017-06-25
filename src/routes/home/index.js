import { h, Component } from 'preact';
import style from './style';
import Hero from '../../components/hero';
import Events from '../../components/events';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Hero />
        <Events />
			</div>
		);
	}
}
