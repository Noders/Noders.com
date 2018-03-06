import { h, Component } from 'preact';
import style from './style';
import Hero from '../../components/hero';
import Events from 'async!../../components/events';
import Media from 'async!../../components/media';
import Organizers from 'async!../../components/organizers';
import Noders from 'async!../../components/noders';
import CodeOfConduct from 'async!../../components/coc';
import Footer from '../../components/footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroLoaded: false
    };
  }

  renderTheRest = () => {
    this.setState({
      heroLoaded: true
    });
  };

  render() {
    const { heroLoaded } = this.state;

    return (
      <div className={style.home}>
        <Hero onComponentDidMount={this.renderTheRest} />
        {heroLoaded && [
          <Events />,
          <Media />,
          <Organizers />,
          <Noders />,
          <CodeOfConduct />
        ]}
        <Footer />
      </div>
    );
  }
}

export default Home;
