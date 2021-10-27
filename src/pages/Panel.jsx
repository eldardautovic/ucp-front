import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';

const Panel = () => {
    
    const name = useSelector((state) => state.user.username);
    
    return (
        <div>
            <NavBar name={name} />
        </div>
    )
}

export default Panel
