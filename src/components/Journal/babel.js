// credit to href={`https://dev.to/chaituknag/a-simple-journal-app-using-react-localstorage-and-fun-23j8`} 
// for outline of this components code

import {useState, useEffect, useRef} from 'react';
import moment from 'moment';
import './journal.css';


function useJournal() {
  const [entries, setEntries] = useState([]);
  
  const getEntriesFromStorage = () => JSON.parse(
    window.localStorage.getItem('journalEntries')
  );

  const setEntriesToStorage = items => 
    window.localStorage.setItem('journalEntries', JSON.stringify(items));

  useEffect(() => {
    const entriesFromStorage = getEntriesFromStorage();
    if(entriesFromStorage) {
      setEntries(entriesFromStorage);
    }
  }, []);
  
  const storeEntry = (entry) => {
    const newEntries = [entry, ...entries];
    setEntries(newEntries);
    setEntriesToStorage(newEntries);
  }
  
  const removeEntry = (index) => {
    const newEntries = [...entries.slice(0, index), ...entries.slice(index+1)];
    setEntries(newEntries);
    setEntriesToStorage(newEntries);
  }
  
  return [entries, storeEntry, removeEntry];
}



function EntryList({list, deleteEntry}) {
  const handleDeleteClick = (index) => e => {
    deleteEntry(index);
  }
  return (
    <div className="entry-list mt-3">
      {
        list && list.map((item, i) => {
          const itemDate = moment(item.date).format('YYYY-MM-DD');
          return (
            <div className="card mb-2">
              <div className="card-body">
                <p className="card-text">{item.message}</p>
                <div id='card-bottom'>
                  <span className="card-title">{itemDate}</span>
                  <button className="btn btn-sm btn-danger" onClick={handleDeleteClick(i)}>X</button>
                </div>
              </div>
            </div>  
          )
        })
      }
    </div>
  )
}



function Entry({addEntry}) {
  const [message, setMessage] = useState('');
  const fieldRef = useRef();
  const handleOnChange = e => setMessage(e.target.value);
  const handleOnSubmit = e => {
    e.preventDefault();
    if(message && message.trim().length > 0) {
      addEntry({
        message,
        date: Date.now()
      });
      setMessage('');
    }
  }
  
  useEffect(() => {
    fieldRef.current.focus();
  }, []);
  
  return (
    <form onSubmit={handleOnSubmit} id='whole-form'>
      <div className="form-group">
        <textarea className="form-control" value={message} onChange={handleOnChange} type="text" id="message" maxLength={100} ref={fieldRef} placeholder="Entry..." />
      </div>
      <button disabled={message.trim().length === 0} id='submit-button' className="btn btn-success form-control" type="submit">Submit</button>
    </form>
  );
}



function JournalBabel() {
  const [entries, storeEntry, removeEntry] = useJournal();
  const handleAddEntry = (entry) => storeEntry(entry);
  const handleDeleteEntry = (index) => removeEntry(index);
  return (
    <div className="container">
      <h2 id='journalTitle'>My Journal</h2>
      <div id='entryStuff'>
        <Entry addEntry={handleAddEntry}/>
        <EntryList list={entries} deleteEntry={handleDeleteEntry}/>
      </div>
    </div>
  )
}

export default JournalBabel;