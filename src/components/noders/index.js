import { h, Component } from 'preact';
import style from './style';
import Member from './member';
import { classJoin } from '../../helpers';

export default class Noders extends Component {
  static triggers = ['scroll', 'resize', 'load'];

  constructor (props) {
    super(props);
    this.state = {
      ready: false,
      scrollOffset: 150,
      noders: []
    };
  }

  shuffleArray = (oldArray) => {
    const array = [...oldArray];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  componentWillMount() {
    import('./data.json')
      .then(data => this.setState({
        noders: this.shuffleArray(data.users)
      }));
  }

  componentDidMount() {
    this.startListening();
  }

  startListening = () => {
    if (this.state.ready) {
      return;
    }
    Noders.triggers.forEach(event => {
      window.addEventListener(event, this.checkComponent, {passive: true});
    });
    this.checkComponent();
  }

  stopListening = () => {
    Noders.triggers.forEach(event => {
      window.removeEventListener(event, this.checkComponent)
    });
  }

  checkComponent = () => {
    const { scrollOffset } = this.state;
    if (!this.containerRef) {
      return null;
    }
    const windowHeight = window.outerHeight;
    const { bottom } = this.containerRef.getBoundingClientRect()
    if (bottom - scrollOffset < windowHeight) {
      this.setState({
        ready: true
      }, this.stopListening)
    }
  }

  render() {
    const { ready } = this.state;
    return (
      <section
        ref={c => { this.containerRef = c }}
        className={'section'}
      >
        <div className="container">
          <a name="comunidad" />
          <div className="section-title">
            <h1 className="title">Comunidad</h1>
            <hr />
          </div>
          {ready && (
            <div class={classJoin('level', style.flexContainer, 'section-content')}>
              {this.state.noders.map(member => <Member username={member.username} image={member.image} />)}
            </div>
          )}
        </div>

      </section>
    );
  }
}
