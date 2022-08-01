import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import LinkForm from './components/LinkForm/LinkForm';

class App extends Component {
  
  render(){
    return (
      <div className="App">
      <Navigation/>
      <Rank/>
      <LinkForm/>
      {/*
    <FaceRecognition/> */}
    </div>
  );
}
}

export default App;
