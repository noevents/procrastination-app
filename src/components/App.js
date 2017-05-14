import React from 'react'
import Header from './Header'
import Gallery from './Gallery'
import {getBoard} from '../api'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: {imageboard: '4chan', board: 'board'},
      boardThreads: []
    };
    this.selectSource = this.selectSource.bind(this)
  }
  selectSource(source){
    
    this.setState({
      source,
      boardThreads: getBoard(source)
    })
  }

  render(){
    return (
      <div>
        <Header selectSource={this.selectSource} />
        <Gallery source={this.state.source} boardCache = {this.state.boardThreads} />
      </div>
    )
  }
}

export default App