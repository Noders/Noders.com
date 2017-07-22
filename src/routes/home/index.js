import { h, Component } from 'preact';
import style from './style';
import Background from '../../components/background';
import Hero from '../../components/hero';
import Events from '../../components/events';
import Media from '../../components/media';
import Organizers from '../../components/organizers';
import Noders from '../../components/noders';
import Community from '../../components/community';
import CodeOfConduct from '../../components/coc';
import { classJoin } from '../../helpers';

export default class Home extends Component {
  render() {
    return (
      <div class={classJoin(style.home)}>
        <Hero />
        <Events />
        <Media />
        <Organizers />
        <Noders />
        <CodeOfConduct />
      </div>
    );
  }
}
