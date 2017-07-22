import { h, Component } from 'preact';
import style from './style';
import Member from './member';
import { classJoin } from '../../helpers';

export default class Noders extends Component {
  constructor (props) {
    super(props);
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
        noders: this.shuffleArray(data.users)
      }));
  }
  render() {
    return (
      <section className={classJoin('section', style.section)}>
        <div className="container">
          <a name="comunidad" />
          <div className="section-title">
            <h1 className="title">Comunidad</h1>
            <hr />
          </div>
          <div class={classJoin('level', style.flexContainer, 'section-content')}>
            {this.state.noders.map(member => <Member username={member.username} image={member.images.image_192} />)}
          </div>
        </div>
      </section>
    );
  }
}
