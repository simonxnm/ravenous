import React from 'react';
import './App.css';
import businesslist from '../businesslist/businesslist';
import bar from '../bar/bar';

class App extends React.Component {
  render () {
    return(
    <div className="App">
    <h1>ravenous</h1>
    <SearchBar />
    </div>
  );
  
  }
}
export default App;
