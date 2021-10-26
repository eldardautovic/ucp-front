import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { userActions } from "../store/user/userSlice";

export const usePersistantLogin = () => {
    const dispatch = useDispatch();
    const loggedIn = useSelector((state) => state.user.loggedIn);
    const tokenId = localStorage.getItem("tokenId");

    if(tokenId !== null && !loggedIn) {

        const decodedToken = jwtDecode(tokenId);

        console.log(decodedToken);

        if(decodedToken.signed)
            dispatch(userActions.logIn());

    }
    

}