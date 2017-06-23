import { h, Component } from 'preact';
import style from './style';
import image from '../../assets/noders/noderslogo_2.png';

export default class Header extends Component {
	componentDidMount() {
		setTimeout(() => this.setState({ load: true }), 750);
	}
	render() {
		const loadImage = this.state.load ? style.showImage : null ;
		return (
			<div class={style.fullHeight}>
				<div class={[style.fullHeight, style.background].join(' ')} />
				<div class={[style.fullHeight, style.content].join(' ')}>
					<img src={image} class={loadImage} />
					<h1>¿Porqué? Porque nos gusta</h1>
				</div>
			</div>
		);
	}
}
