import './archive.css';
import { useState, useEffect } from 'react';

function Archive(){
        const [dates,setDate] = useState([])

        useEffect(()=> {
            fetch('http://localhost:3001/all_dates')
            .then(res=> res.json())
            .then(json=> {
                setDate(json);
            })
        },[])
        
        function buttonDates(year){
            let yearData = dates.filter(x=> x.date.includes(year));
            console.log(yearData);
            // console.log(yearData.map(x=> x.date));
            document.querySelector('#yearly').innerHTML = yearData.map(x=> x.date);
        }

        return(
            <div id='archive-wrapper'>
                <h1>Archive</h1>
                <div className='allDates'>
                    <button onClick={()=>buttonDates('2023')}>2023</button>
                    <button onClick={()=>buttonDates('2022')}>2022</button>
                    <button onClick={()=>buttonDates('2021')}>2021</button>
                    <button onClick={()=>buttonDates('2020')}>2020</button>
                    <button onClick={()=>buttonDates('2019')}>2019</button>
                    <button onClick={()=>buttonDates('2018')}>2018</button>
                    <button onClick={()=>buttonDates('2017')}>2017</button>
                    <button onClick={()=>buttonDates('2016')}>2016</button>
                    <button onClick={()=>buttonDates('2015')}>2015</button>
                    <button onClick={()=>buttonDates('2014')}>2014</button>
                    <button onClick={()=>buttonDates('2013')}>2013</button>
                    <button onClick={()=>buttonDates('2012')}>2012</button>
                    <button onClick={()=>buttonDates('2011')}>2011</button>
                    <button onClick={()=>buttonDates('2010')}>2010</button>
                    <button onClick={()=>buttonDates('2009')}>2009</button>
                    <button onClick={()=>buttonDates('2008')}>2008</button>
                    <button onClick={()=>buttonDates('2007')}>2007</button>
                    <button onClick={()=>buttonDates('2006')}>2006</button>
                    <button onClick={()=>buttonDates('2005')}>2005</button>
                    <button onClick={()=>buttonDates('2004')}>2004</button>
                    <button onClick={()=>buttonDates('2003')}>2003</button>
                    <button onClick={()=>buttonDates('2002')}>2002</button>
                    <button onClick={()=>buttonDates('2001')}>2001</button>
                    <button onClick={()=>buttonDates('2000')}>2000</button>
                    <button onClick={()=>buttonDates('1999')}>1999</button>
                    <button onClick={()=>buttonDates('1998')}>1998</button>
                    <button onClick={()=>buttonDates('1997')}>1997</button>
                    <button onClick={()=>buttonDates('1996')}>1996</button>
                    <button onClick={()=>buttonDates('1995')}>1995</button>

                    <section id='yearly'></section>
                </div>
            </div>    
    )
}

export default Archive;