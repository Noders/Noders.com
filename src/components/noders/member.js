import { h, Component } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';

export default class Member extends Component {
  constructor (props) {
    super(props);
    this.state = {
      active: false
    };
  }

  clicked = () => {
    this.setState({
      active: !this.state.active
    })
  }
  
  render() {
    const { username, image } = this.props;
    const activeClass = this.state.active ? style.activeHexagon : null;
    return (
      <div class={style.hexagonContainer}>
        <div class={classJoin(style.hexagon, style.hexagon2, activeClass)} onClick={this.clicked}>
          <div class={style['hexagon-in1']}>
            <div class={style['hexagon-in2']} style={{
              backgroundImage: `url(${image})`
            }} />
            <div class={style['hexagon-in-layout']}>
              <span> { username } </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
