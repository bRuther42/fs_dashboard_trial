const fs = require('fs');
const jsdom = require('jsdom');

function makeHTML(){
    fetch('https://apod.nasa.gov/apod/archivepixFull.html')
    .then(res=> res.text())
    .then(html=> {
        // console.log(html);
        const dom = new jsdom.JSDOM(html);
        const data = dom.window.document.querySelector('center+b').innerHTML;
        const eachDay = data.split('<br>');
        const splitDates = eachDay.map(x=> {return( x.replace('\n\n','').replace('\n','').replace('  <a href="','https://apod.nasa.gov/apod/').replace('">','>').replace('</a>','').replace(':','>')).split('>')}) 
        
        // const all_dates = {};
        const whole = [];         
        splitDates.map((x,i)=> {
            item = {};
            item.id = i,
            item.date = x[0], 
            item.title = x[2], 
            item.link = x[1]
            whole.push(item);
            i++;
        });
        const all_dates = {"all_dates": whole};

        const wholeStr = JSON.stringify(all_dates);
        fs.writeFile('db.json', wholeStr, {
            flag:"w+"
        },(err)=> {
            if(err) throw err;
            console.log('New data added')
        });
    })
};

makeHTML();

