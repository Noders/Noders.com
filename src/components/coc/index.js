import { h } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';

const CodeOfConduct = () => (
  <section className={classJoin('section', style.section)}>
    <div className="container">
      <div className="section-title">
        <h1 className="title">Código de Conducta</h1>
        <hr />
      </div>
      <div className="section-content">
        <div className={classJoin(style.cocText, 'content', 'has-text-centered')}>
          <i class={classJoin('fa fa-file-text-o', style.cocIcon)} />
          <p>
            Todos nuestros eventos se rigen y respetan este <a href="https://github.com/Noders/code_of_conduct" target="_blank" rel="noopener">Código de Conducta</a>.
          </p>
          <p>
            Si quieres participar de alguno de ellos, te pedimos que lo respetes y que nos ayuden a que otros lo hagan.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CodeOfConduct;
