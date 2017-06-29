import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import nodersYoutube from '../../assets/images/noders-youtube-200.png';
import nodersCast from '../../assets/images/noders-cast-200.png';

export default (props, context) =>
(
	<section>
		<div class={style.title}>
			<h1>Media</h1>
			<hr />
		</div>
		<div className="level">
			<div className="level-item has-text-centered">
				<figure>
					<Link href="/media/youtube" className={style}>
						<img src={nodersYoutube} class={style.image} alt="youtube" />
						<h3 class={style.imageTitle}> Youtube </h3>
					</Link>
				</figure>
			</div>
			<div className="level-item has-text-centered">
				<figure>
					<Link href="/media/noderscast" className={style.imageBackground}>
						<img src={nodersCast} class={style.image} alt="noderscast" credits="podcast by Nate Eul from the Noun Project" />
						<h3 class={style.imageTitle}> NodersCast </h3>
					</Link>
				</figure>
			</div>
		</div>
	</section>
);
