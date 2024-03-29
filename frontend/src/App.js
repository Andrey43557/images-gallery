import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/search';

const UNSPALSH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] =useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  console.log(word)
  fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPALSH_KEY}`).
  then ((res)=>res.json())
  .then((data)=>{console.log(data);
  })
  .catch((err)=> {
    console.log(err);
  })
  setWord('');
  }
  
  return (
    <div className="App">
     <Header title="Images Gallery 2"/>
     <Search word ={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
