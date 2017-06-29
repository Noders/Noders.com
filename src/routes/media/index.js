import { h } from 'preact';
import style from './style';
import MediaComponent from '../../components/media';

const Media = (props, context) =>
(
	<div class={style.container}>
		<MediaComponent />
	</div>
);
export default Media;
