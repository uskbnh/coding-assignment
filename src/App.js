import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lists from './components/Lists';

import './App.css';
import logo from './images/logo.png';

class App extends Component {
   componentDidMount(){
      fetch('./mockdata.json')
      .then(res => res.json())
      .then(res => this.props.onInit(res))
      .catch(err => console.log(err));
   }

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

const mapDispatchToProps = dispatch => {
   return {
       onInit: (data) => dispatch({type: 'INIT', payload: data})
   };
}

export default connect(null,mapDispatchToProps)(App);
