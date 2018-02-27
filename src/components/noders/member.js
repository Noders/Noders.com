import { h, Component } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';

export default class Member extends Component {
  render() {
    const { image, id } = this.props;
    return (
      <div
        id={id}
        class={classJoin(style.hexagon)}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div class={classJoin(style.hexTop)} />
        <div class={classJoin(style.hexBottom)} />
      </div>
    );
  }
}
