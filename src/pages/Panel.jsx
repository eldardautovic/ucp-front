import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';
import Announcments from '../components/Announcments';
const Panel = () => {


    const name = useSelector((state) => state.user.username);
    
    return (
        <div>
            <NavBar name={name} />
            <Announcments />
        </div>
    )
}

export default Panel
