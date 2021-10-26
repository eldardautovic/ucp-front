import style from '../styles/Register.module.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { registerAction } from '../store/user/userActions';
import { useSelector } from 'react-redux';

const Register = () => {

    const loggedIn = useSelector((state) => state.user.loggedIn);

    const username = useRef();
    const password = useRef();

    const dispatch = useDispatch();

    const registerUser = (event) => {

        event.preventDefault();

        if(username.current.value.length < 5 || password.current.value.length < 5) return;

        dispatch(registerAction(username.current.value, password.current.value));

    }

    return (
        <div className={style.container}>
            {loggedIn === true ? <h1>Eldaaaaar</h1> : <><div className={style.formContainer}>
                <form onSubmit={registerUser}>
                    <h1 className={style.header}>USER CONTROL PANEL</h1>
                    <label className={style.label}>
                        Username:
                    </label>
                    <input type="text" ref={username}  placeholder="Username..." className={style.input} maxLength="24"/>
                    <label className={style.label}>
                        Password:
                    </label>
                    <input ref={password} type="password"  placeholder="Password..." className={style.input} maxLength="24"/>

                    <div className={style.buttonContainer}>
                        <button type="submit" className={style.button}>Register</button>
                    </div>
                    <h1 className={style.disclaimer}>Already have an account? <Link to="/login">Login now.</Link></h1>
                </form>
                 </div>
                <h1 className={style.footer}>Made with ☕ by Eldar Dautovic</h1></>
            }
        </div>
    )
}

export default Register
