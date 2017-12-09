import { h, Component } from 'preact';
import style from './style';
import Hero from '../../components/hero';
import Events from 'async!../../components/events';
import Media from 'async!../../components/media';
import Organizers from 'async!../../components/organizers';
import Noders from 'async!../../components/noders';
import CodeOfConduct from 'async!../../components/coc';
import { classJoin } from '../../helpers';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroLoaded: false
    };
    window.onload = this.renderTheRest;
  }

  renderTheRest = () => {
    this.setState({
      heroLoaded: true
    });
  };

  render() {
    const { heroLoaded } = this.state;

    return (
      <div class={classJoin(style.home)}>
        <Hero />
        {heroLoaded && (
          <div>
            <Events />
            <Media />
            <Organizers />
            <Noders />
            <CodeOfConduct />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
