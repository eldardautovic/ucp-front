import axios from 'axios';
import {announcmentActions } from './announcmentSlice';

export const fetchAnnouncments = () => {
	return (dispatch) => {
                axios.get('http://localhost:8080/announcments')
                .then((response) => {
                        
                        dispatch(announcmentActions.setAnnouncments(response.data));
                })
                .catch((err) => alert(err));
	};
};