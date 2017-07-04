import { h } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';

const Footer = () => (
  <footer class={'footer'}>
    <div class={classJoin('container', style.social)}>
      <div class={classJoin('content has-text-centered')}>
        <p>
          Noders.com está Mantenido por el <a href="http://github.com/noders">Noders Core Team</a>.
        </p>
      </div>

      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <hr />
        </div>
      </div>

      <div class={'columns'}>
        <div class={'column is-2'} />
        <div class={'column is-4'}>
          <div class={classJoin('content', 'has-text-centered')}>
            <a class={classJoin('icon', style.iconAnchor)} href="https://www.meetup.com/es/Javascript-Chile/">
              <i class={classJoin('fa fa-meetup', style.iconFont)} />
            </a>
            <a class={classJoin('icon', style.iconAnchor)} href="https://github.com/noders">
              <i class={classJoin('fa fa-github', style.iconFont)} />
            </a>
            <a class={classJoin('icon', style.iconAnchor)} href="https://twitter.com/noderscl">
              <i class={classJoin('fa fa-twitter', style.iconFont)} />
            </a>
            <a class={classJoin('icon', style.iconAnchor)} href="https://facebook.com/noderscl">
              <i class={classJoin('fa fa-facebook', style.iconFont)} />
            </a>
            <a class={classJoin('icon', style.iconAnchor)} href="https://www.youtube.com/channel/UC7tUsO3S7424TMcgSCUOCow">
              <i class={classJoin('fa fa-youtube', style.iconFont)} />
            </a>
          </div>
        </div>
        <div class={'column is-4'}>
          <div class={classJoin('content', 'has-text-centered')}>
            <p>
              Código fuente bajo licencia <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. <br />
              Sitio creado con ❤️ por <a href="https://twitter.com/fforres" target="_blank">@fforres</a> y <a href="https://twitter.com/xabadu" target="_blank">@xabadu</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
