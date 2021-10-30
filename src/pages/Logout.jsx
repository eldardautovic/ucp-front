import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { userActions } from "../store/user/userSlice";

const Logout = () => {
    
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.removeItem("tokenId");
        history.push('/login');
        dispatch(userActions.logOut());
    }, []);
    
    return (
        <div>
            
        </div>
    )
}

export default Logout
