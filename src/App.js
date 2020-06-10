import React , {Component} from 'react';
import MyComponent from './MyComponent'; // MyComponent 파일을 불러옵니다.
import './App.css';

class App extends Component{
  render(){
    return (
      <MyComponent name="React" age={4}/>
    );
  }
}

export default App;
