
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {fetchAnnouncments} from '../store/announcments/announcmentActions';
import { useDispatch } from 'react-redux';
import Announcment from './Announcment';
import style from './Announcments.module.css';
const Announcments = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAnnouncments());
    }, [])


    const announcments = useSelector((state) => state.announcments.announcments);

    return (
        <div className={style.container}>
           {announcments && announcments.map((element) => {
               return <Announcment content={element} />
           })}
        </div>
    )
}

export default Announcments
