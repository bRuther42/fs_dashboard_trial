import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './admin.css';
import Social from './Social/Social';

function Admin(){
    const [date, setDate] = useState(new Date());

    useEffect(()=> {
        setInterval(()=> setDate(new Date()), 1000)
    }, []);

    return(
        <div id='adminWrapper'>
            <section>
                <div id='dateTime'>{date.toString()}</div>
                <div id='qotd'><Outlet/></div>
            </section>

            <section id='itemsWrapper'>
                <div id='apodLink'>
                    <img src='space.jpg' alt='space'/>
                    <Link to='apod' className='adLink'>APOD</Link>
                    <span>Astronomy Picture of the Day</span>
                </div>
                <div id='journalLink'>
                    <img src='journal.jpg' alt='journal'/>
                    <Link to='journal' className='adLink'>Journal</Link>
                    <span>Keep track of your daily life</span>
                </div>
                <div id='boredLink'>
                    <img src='bored.jpg' alt='bored'/>
                    <Link to='bored' className='adLink'>Bored?</Link>
                    <span>Need an activity to pass the time?</span>
                </div>
            </section>

            <section id='socialWrapper'>
                <Social/>
            </section>
        </div>
    )
}


export default Admin;