import {useAuth} from './AuthProvider'
import {useRef} from 'react'
import './auth.css'

function Login()
{
    const authContext = useAuth();
    const userRef = useRef();
    const pwdRef = useRef();

    function onAttemptLogin(e)
    {
        e.preventDefault();
        authContext.signin(userRef.current.value,pwdRef.current.value);
    }

    return(
        <div id='loginWrapper'>
            <div className="loginform">
                <h3 className='logSinHead'>Login</h3>
                <form id='loginForm'>
                    <input type="email" ref={userRef} placeholder='Example@email.com' required></input><br/>
                    <input type="text" ref={pwdRef} placeholder='Password' minLength='8' required></input><br/>
                    <button onClick={onAttemptLogin}>Login</button>
                </form>
            </div>
        </div>
    )
}


export default Login

