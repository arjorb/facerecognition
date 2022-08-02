import React,{Component} from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import LinkForm from './components/LinkForm/LinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: '1fa1076dd7ce45bda0ad73582b8b1fe1'
 });

class App extends Component {
 
  constructor(){
    super();
    this.state = {
      input:'',
      imageUrl: ''
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value)
    this.setState({input: event.target.value});
  }

  onSubmit = () =>{
    console.log('cliked!')
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(
      function(response){
        // console.log(response);
        console.log(response.output[0].data.regions[0].region_info.bounding_box)
      },
      function(err){
        console.log(err)
      }
    );
  }
  render(){
    return (
      <div className="App">
      <Navigation/>
      <Rank/>
      <LinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
      <FaceRecognition imageUrl={this.state.imageUrl}/>
    </div>
  );
}
}

export default App;
