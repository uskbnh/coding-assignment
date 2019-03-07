import React, { Component } from 'react';

import Lists from './components/Lists';

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
               <Lists functionality='MyList'/>
               <hr />
               <Lists functionality='Recommendations' />
            </div>
         </div>
      );
   }
}

export default App;
