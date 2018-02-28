import { h, Component } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';

export default class Member extends Component {
  render() {
    const { image, username, id, onClick, selectedIndex } = this.props;
    if (selectedIndex) {
      console.log(this.props)
    }
    return (
      <div className={style.hexagonContainer}>
        <div
          id={id}
          onClick={onClick}
          class={classJoin(style.hexagon)}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div class={classJoin(style.hexTop)} />
          <div class={classJoin(style.hexBottom)} />
        </div>
        <div class={classJoin(style.backgroundText)}>@{username}</div>
      </div>
    );
  }
}
