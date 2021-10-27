import { useState } from 'react';
import style from './NavBar.module.css';
import { useRef } from 'react';
import BoxPortal from './BoxPortal';


const NavBar = ({name}) => {

    const selectRef = useRef();
    const [toggled, setToggled] = useState(false);

    const toggleOpen = () => {
        setToggled(!toggled);

    }

    return (
        <div className={style.container}>
            <div className={style.logo}>
                <h1>User Control Panel</h1>
            </div>

            <div className={style.avatar}>
                <img onClick={toggleOpen} src={`https://avatars.dicebear.com/api/initials/${name}.svg`} alt="avatar" />
            </div>
            {toggled && <BoxPortal handleClickOutside={toggleOpen} />}
        </div>
    )
}

export default NavBar
