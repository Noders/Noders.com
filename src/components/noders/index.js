import { h, Component } from 'preact';
import style from './style';
export default class Header extends Component {
  componentDidMount() {
    setTimeout(() => this.setState({ load: true }), 750);
  }
  constructor () {
    super();
    this.state = {
      noders: []
    };
  }
  componentWillMount() {
    import('./data.json').then(data => this.setState({ noders: data.users }));
  }
  render() {
    console.log(this.state)
    return (
      <section class={['section-container', style.container].join(' ')}>
        <div className="section-title">
          <h3>The Noders</h3>
          <hr />
        </div>
        <div class={['level', style.flexContainer].join(' ')}>
          {this.state.noders.map(member => (
            <div class={style.hexagonContainer}>
              <div class={[style.hexagon, style.hexagon2].join(' ')}>
                <div class={style['hexagon-in1']}>
                  <div class={style['hexagon-in2']} style={{
                    backgroundImage: `url(${member.images.image_192})`
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
