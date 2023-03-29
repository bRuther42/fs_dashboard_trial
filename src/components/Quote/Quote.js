import { useState } from 'react';
import './quote.css';

let counter = 0;
function Quote(){
    const [count, setCount] = useState([{}]);

    let changeAPI = ()=> {
        const categories = {
            1: 'art',
            2: 'funny',
            3: 'inspire',
            4: 'life',
            5: 'love', 
            6: 'management',
            7: 'sports'
        };
        counter++;
        if(counter > 8){
            counter = 0;
        }
        fetch('http://quotes.rest/qod.json?category=' + categories[counter])
        .then(res=> res.json())
        .then(json=> setCount(json.contents.quotes))
    };

    return(
        <div id='quoteWrapper'>
            <h5 id='title'>Quote of the day... {count.map(x=> x.category)}</h5>
            <div className='radioWrap'>
                <div id='quote-things'>
                    <h6>{count.map(x=> x.quote)}</h6>
                    <h6>{count.map(x=> x.author)}</h6>
                </div>
                <button id='api-button' onClick={changeAPI}><img src='onearrow.png' alt='arrow'/></button>
            </div>
        </div>
    )
}

export default Quote;