import axios from "axios";
import { userActions } from "./userSlice";
import jwtDecode from "jwt-decode";

export const logInAction = (username, password) => {
	return (dispatch) => {
                axios.post('http://localhost:8080/login', {user: username, pw: password})
                .then((response) => {
                        
                        const decodedToken = jwtDecode(response.data.token);
                        dispatch(userActions.logIn({username:username, admin: decodedToken.admin}))
                        localStorage.setItem("tokenId", response.data.token);
                })
                .catch((err) => alert(err));
	};
};

export const registerAction = (username, password) => {
	return (dispatch) => {
		axios.post('http://localhost:8080/register', {user: username, pw: password})
        .then((response) => {
                dispatch(userActions.logIn({username: username, admin: false}))
                localStorage.setItem("tokenId", response.data.token);
            }
        )
        
	};
};