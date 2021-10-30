
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {fetchAnnouncments} from '../store/announcments/announcmentActions';
import { useDispatch } from 'react-redux';
const Announcments = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAnnouncments());
    }, [])


    const announcments = useSelector((state) => state.announcments.announcments);

    useEffect(() => {
        console.log(announcments)
    }, [announcments]);

    return (
        <div>
           {announcments && announcments.map((element) => {
               return <h1>eeeee</h1>
           })}
        </div>
    )
}

export default Announcments
