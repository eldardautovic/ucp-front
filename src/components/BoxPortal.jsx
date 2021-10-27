import ReactDOM from 'react-dom';
import BoxComponent from './BoxComponent';
import style from './BoxPortal.module.css';

const BoxPortal = (props) => {
	const { handleClickOutside, modalOpened } = props;
	return ReactDOM.createPortal(
		<div>
			<BoxComponent modalOpened={modalOpened} handleClickOutside={handleClickOutside} />
			<div onClick={handleClickOutside} className={style['div']}></div>
		</div>,
		document.getElementById('modalContainer')
	);
};

export default BoxPortal;
