import { h } from "preact";
import style from "./style";
import Hero from "../../components/hero";
import Events from "async!../../components/events";
import Media from "async!../../components/media";
import Organizers from "async!../../components/organizers";
import Noders from "async!../../components/noders";
import CodeOfConduct from "async!../../components/coc";
import { classJoin } from "../../helpers";

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
