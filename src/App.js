import React, { Component } from 'react'
import router from './utils/routes'
// import Navbar from './comps/Navbar'
// import Landing from './comps/Landing'

class App extends Component {


  render() {
    return (
      <div className='appTotal'>
        {router}
        <a href='http://localhost:3040/auth'><button>Log in</button></a>
        <a href='http://localhost:3040/auth/logout'><button>Log out</button></a>
      </div>
    );
  }
}

export default App;
