import axios from "axios";
import { userActions } from "./userSlice";

export const logInAction = (username, password) => {
	return (dispatch) => {
                axios.post('http://localhost:8080/login', {user: username, pw: password})
                .then((response) => {
                        dispatch(userActions.logIn())
                        localStorage.setItem("tokenId", response.data.token);
                })
                .catch((err) => alert(err));
	};
};

export const registerAction = (username, password) => {
	return (dispatch) => {
		axios.post('http://localhost:8080/register', {user: username, pw: password})
        .then((response) => {
                dispatch(userActions.logIn())
                localStorage.setItem("tokenId", response.data.token);
            }
        )
        
	};
};