import { h, Component } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';

export default class Background extends Component {
  render() {
    return (
      <div class={classJoin(style.fullHeight, style.background)} >
        <div class={classJoin(style.fullHeight, style.mainOverlay)} />
      </div>
    );
  }
}
