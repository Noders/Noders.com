import { h } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';

const Footer = () => (
  <footer class={classJoin('footer', style.footerSection)}>
    <div class={classJoin('container', style.social)}>
      <div class={classJoin('content has-text-centered', style.disclaimer)}>
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
            <a aria-label="JavaScript Chile en Meetup.com" class={classJoin('icon', style.iconAnchor)} href="https://www.meetup.com/NodersJS">
              <i class={classJoin('icon icon-meetup', style.iconFont)} />
            </a>
            <a aria-label="GitHub Noders" class={classJoin('icon', style.iconAnchor)} href="https://github.com/noders">
              <i class={classJoin('icon icon-github', style.iconFont)} />
            </a>
            <a aria-label="Perfil de Twitter de Noders" class={classJoin('icon', style.iconAnchor)} href="https://twitter.com/NodersJS">
              <i class={classJoin('icon icon-twitter', style.iconFont)} />
            </a>
            <a aria-label="Página de Facebook de Noders" class={classJoin('icon', style.iconAnchor)} href="https://facebook.com/NodersJS">
              <i class={classJoin('icon icon-facebook', style.iconFont)} />
            </a>
            <a aria-label="Canal de YouTube de Noders" class={classJoin('icon', style.iconAnchor)} href="https://www.youtube.com/c/Noders">
              <i class={classJoin('icon icon-youtube', style.iconFont)} />
            </a>
          </div>
        </div>
        <div class={'column is-4'}>
          <div class={classJoin('content', 'has-text-centered', style.disclaimer)}>
            <p>
              Código fuente bajo licencia <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. <br />
              Sitio creado con ❤️ por <a href="https://twitter.com/fforres" target="_blank" rel="noopener">@fforres</a> y <a href="https://twitter.com/xabadu" target="_blank" rel="noopener">@xabadu</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
