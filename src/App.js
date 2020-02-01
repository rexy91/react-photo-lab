import React from 'react';
import './App.css';
import Header from './components/Header'
import PhotoContainer from './components/PhotoContainer'

class App extends React.Component{
  render(){
    return (
      <div className="App">
          <Header/>
          <PhotoContainer/>
      </div>
    )
  }
}

export default App;
