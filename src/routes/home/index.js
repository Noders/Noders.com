import { h } from 'preact';
import style from './style';
import Hero from '../../components/hero';
import Events from '../../components/events';
import Media from '../../components/media';
import Organizers from '../../components/organizers';
import Noders from '../../components/noders';
import CodeOfConduct from '../../components/coc';
import { classJoin } from '../../helpers';

const Home = () => (
  <div class={classJoin(style.home)}>
    <Hero />
    <Events />
    <Media />
    <Organizers />
    <Noders />
    <CodeOfConduct />
  </div>
);

export default Home;
