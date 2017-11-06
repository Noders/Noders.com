import { h, Component } from 'preact';
import style from './style';
import image from '../../assets/noders/noderslogo_2.png';
import { classJoin } from '../../helpers';

export default class Hero extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.load !== nextState.load;
  }
  componentDidMount() {
    setTimeout(() => this.setState({ load: true }), 750);
  }
  render() {
    const showable = this.state.load ? style.showable : null;
    return (
      <div class={classJoin(style.fullHeight, style.content, showable, style.nodersLogo)}>
        <img alt="Logo Noders" src={image} />
        <h1 >¿Por qué? Porque nos gusta</h1>
        <a href="https://fforres.typeform.com/to/z2Rj7z"
          class={classJoin('button', 'is-success', 'is-large', style.mainButtonCta)}>
          <span class="icon is-medium">
            <i class="fa fa-slack" />
          </span>
          <span>
            Únete a nuestro Slack
          </span>
        </a>
      </div>
    );
  }
}
