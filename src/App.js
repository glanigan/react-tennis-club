import React, { Component } from 'react';
import Appbar from './components/appbar/'
import Pages from './Pages'
import Footer from './components/footer/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar/>
        <Pages/>
        <Footer/>
      </div>
    )
  }
}

export default App;
