import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './PanelInformation.module.css';

const PanelInformation = () => {

    const[users, setUsers] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/users/count`)
        .then((response) => {
            setUsers(response.data.registeredUsers);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className={style.container}>
            {users ? <h1 className={style.header}>Registered users: {users}</h1> : <h1 className={style.header}>There is no registered users.</h1>}
        </div>
    )
}

export default PanelInformation
