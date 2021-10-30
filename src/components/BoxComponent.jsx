import { useHistory } from 'react-router-dom';
import style from './BoxComponent.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BoxComponent = (props) => {
	const { handleClickOutside } = props;
	const history = useHistory();

	const admin = useSelector((state) => state.user.admin);

	const handleClick = () => {
		history.push('/logout');
		handleClickOutside();
	};
	return (
		<div className={style['box']}>
			<ul>
				{ admin && <li onClick={handleClick}>Admin panel</li>}
				<li onClick={handleClickOutside}>Nalog</li>
				<li onClick={handleClickOutside}>
					<Link to="/logout">Odjavi se</Link>
				</li>
			</ul>
		</div>
	);
};

export default BoxComponent;
