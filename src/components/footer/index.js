import { h } from 'preact';
import style from './style';
import members from '../../assets/data/members';

const Footer = () => (
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          Noders.com está Mantenido por el <a href="github.com/noders">Noders Core Team</a>.
        </p>
        <p>
          Código fuente bajo licencia <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. <br />
          Contenido del sitio bajo licencia <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>. <br />
          Sitio creado con ❤️ por <a href="https://twitter.com/fforres" target="_blank">@fforres</a> y <a href="https://twitter.com/xabadu" target="_blank">@xabadu</a>.
        </p>
        <p>
          <a class="icon" href="https://github.com/jgthms/bulma">
            <i class="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
