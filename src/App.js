import React, { Component } from 'react'
import router from './utils/routes'
// import Navbar from './comps/Navbar'
// import Landing from './comps/Landing'

class App extends Component {


  render() {
    return (
      <div className='appTotal'>
        {router}
      </div>
    );
  }
}

export default App;
