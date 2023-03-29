import { useState } from 'react';
import './bored.css';


function Bored(){
    const [activity, setActivity] = useState([]);

        let handleClick = ()=> {
            fetch('http://www.boredapi.com/api/activity/')
            .then(res=> res.json())
            .then(json=> setActivity(json))        
        };    

    return(
        <div id='boredWrapper'>
            <button className='glowing-btn' onClick={handleClick}><span className='glowing-text'>Activity</span></button>
            <div id='activity'>
                <span>{activity.activity}</span>
                <span>Type: {activity.type}</span>
                <span>Participants: {activity.participants}</span>
                <span>Accessibility: {activity.accessibility}</span>
            </div>
        </div>
    )
}

export default Bored;