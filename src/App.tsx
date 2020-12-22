import React, { Component } from 'react';
import {observer} from 'mobx-react';
import './App.css';
import MainDiv from "./Components/MainDiv"

@observer
class App extends Component<{}> {
  render(){
    return (
      <div className="App">
        <MainDiv />
      </div>
    );

  }
}

export default App;
