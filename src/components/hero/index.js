import { h, Component } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';
import Picture from '../picture';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.load !== nextState.load;
  }

  load = () => {
    this.setState({ load: true });
    this.props.onComponentDidMount();
  };

  componentDidMount() {
    window.requestAnimationFrame(this.load);
  }

  render() {
    const showable = this.state.load ? style.showable : null;
    return (
      <div
        class={classJoin(
          style.fullHeight,
          style.content,
          showable,
          style.nodersLogo
        )}
      >
        <Picture alt="Logo Noders" imageName="noderslogo_2.png" />
        <h1>¿Por qué? Porque nos gusta</h1>
        <a
          target="_blank"
          href="https://noders.live/discord"
          class={classJoin(
            'button',
            'is-success',
            'is-large',
            style.mainButtonCta
          )}
        >
          <span>Únete a nuestro Discord</span>
          <Picture
            alt="Logo Discord"
            imageName="discord.png"
            className={style.icon}
          />
        </a>
      </div>
    );
  }
}
