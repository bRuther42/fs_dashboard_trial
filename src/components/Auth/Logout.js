import {useAuth} from './AuthProvider'

function Logout()
{
    const loginInfo = useAuth()
    loginInfo.signout();
    return(
        <b>you have been logged out. Come back soon!</b>
    )
}

export default Logout