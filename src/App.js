import React from 'react';
import './App.css';
import Child from './Component/parentTo Child/Child';

class App extends React.Component {
  state = {
    title: 'Parent to Child'
  }
  newHandleEvent = (newtitle) => {
    this.setState({ title: newtitle });
  }
  render() {
    return (
      <div>
        <Child handleEvent={this.newHandleEvent.bind(this, 'new world')} title={this.state.title} />
      </div>
    )
  }
}


export default App;
