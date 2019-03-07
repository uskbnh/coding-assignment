import React, { Component } from 'react';

import MyList from './components/MyList';
import Recommendations from './components/Recommendations';

import './App.css';
import logo from './images/logo.png';

class App extends Component {
   render() {
      return (
         <div className="App">
            <header>
               <img className='Logo' src={logo} alt='Netflex'/>
            </header>
            <div className="AppList">
               <MyList />
               <hr />
               <Recommendations />
            </div>
         </div>
      );
   }
}

export default App;
