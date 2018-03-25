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
          href="https://fforres.typeform.com/to/z2Rj7z"
          class={classJoin(
            'button',
            'is-success',
            'is-large',
            style.mainButtonCta
          )}
        >
          <span class="icon">
            <i class="icon icon-slack" />
          </span>
          <span>Únete a nuestro Slack</span>
        </a>
      </div>
    );
  }
}
