import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import Icon from '../../assets/noders_icons/noders_white.svg';
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
