import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';
import Announcments from '../components/Announcments';
import PanelInformation from '../components/PanelInformation';
const Panel = () => {


    const name = useSelector((state) => state.user.username);
    
    return (
        <div>
            <NavBar name={name} />
            <PanelInformation />
            <Announcments />
        </div>
    )
}

export default Panel
