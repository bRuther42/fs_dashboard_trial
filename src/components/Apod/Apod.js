import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './apod.css';

function Apod(){
    const [date,setDate] = useState([]);

    useEffect(()=> {
        fetch('https://api.nasa.gov/planetary/apod?api_key=' + process.env.REACT_APP_APOD_API_KEY)
        .then(res=> res.json())
        .then(json=> setDate([json]))
    },[]);

    return(
        <div id="apod-wrap">
            <h2>Astronomy Picture of the Day</h2>
            <h3>{date.map(x=> x.date)}</h3>
            {
                date.map((x,i)=>(
                    <div key={x.id = i+1} id="apod-map">
                        <span>{x.title}</span><br/>
                        <span><img src={x.url} alt='apod'/></span><br/>
                        <span>{x.explanation}</span>
                    </div>))
            }
            <Link to='archive' id='archive'>ARCHIVE</Link>
        </div>
    )
}

export default Apod;