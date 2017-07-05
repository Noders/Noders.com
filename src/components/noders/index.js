import { h, Component } from 'preact';
import style from './style';
import Member from './member';

export default class Header extends Component {
  constructor () {
    super();
    this.state = {
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
        noders: this.shuffleArray(data.users),
      }));
  }
  render() {
    return (
      <section class={['section-container', style.container].join(' ')}>
        <div className="section-title">
          <h3>Algunos Noders!</h3>
          <hr />
        </div>
        <div class={['level', style.flexContainer].join(' ')}>
          {this.state.noders.map(member => <Member username={member.username} image={member.images.image_192} />)}
        </div>
      </section>
    );
  }
}
