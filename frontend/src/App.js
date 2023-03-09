import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/search';




function App() {
  const [word, setWord] =useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  console.log(word)
  
  }
  

  return (
    <div className="App">
     <Header title="Images Gallery 2"/>
     <Search word ={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
