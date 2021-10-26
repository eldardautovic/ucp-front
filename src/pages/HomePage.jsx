import style from '../styles/HomePage.module.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {logInUser} from '../store/user/userActions';

const HomePage = () => {
    
    const dispatch = useDispatch();

    const username = useRef();
    const password = useRef();

    const logInUser = (event) => {

        event.preventDefault();

        if(username.current.value.length < 5 || password.current.value.length < 5) return;

        dispatch()

    }
    
    return (
        <div className={style.container}>
            <div className={style.formContainer}>
                <form onSubmit={logInUser}>
                    <h1 className={style.header}>USER CONTROL PANEL</h1>
                    <label className={style.label}>
                        Username:
                    </label>
                    <input type="text"  placeholder="Username..." className={style.input} maxLength="24" ref={username}/>
                    <label className={style.label}>
                        Password:
                    </label>
                    <input type="password"  placeholder="Password..." className={style.input} maxLength="24" ref={password}/>

                    <div className={style.buttonContainer}>
                        <button type="submit" className={style.button}>Log in</button>
                    </div>
                    <h1 className={style.disclaimer}>You don't have an account? <Link to="/register">Register now.</Link></h1>
                </form>
            </div>
                <h1 className={style.footer}>Made with ☕ by Eldar Dautovic</h1>
        </div>
    )
}

export default HomePage
