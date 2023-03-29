import {useAuth} from './AuthProvider';
import {useRef} from 'react';
import './auth.css';

function Signup()
{
    const authContext = useAuth();
    const userRef = useRef();
    const pwdRef = useRef();

    function onAttemptSignup(e)
    {
        e.preventDefault();
        authContext.signup(userRef.current.value,pwdRef.current.value);
        document.querySelector('#signForm').reset(); 
    }

    return(
        <div id='signWrapper'>
        <div className="loginform">
            <h3 className='logSinHead'>Sign Up</h3>
            <form id='signForm'>
                <input type="email" ref={userRef} placeholder='Example@email.com' required></input><br/>
                <input type="text" ref={pwdRef} placeholder='Password' minLength='8' required></input><br/>
                <button onClick={onAttemptSignup}>Sign Up</button>
            </form>
        </div>
        </div>
    )
}


export default Signup