
import {useAuth} from './AuthProvider'

function UserInfo()
{
    const user = useAuth()
    console.log("User VALUE",user)
    return(
        <b>{user.currentUser?user.currentUser.email:null}</b>
    )
}

export default UserInfo