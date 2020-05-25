import React from 'react';
import AppContainer from './AppContainer';

export default class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isReady: false,
    };
  }



  render () {
   
      return (
    
          <AppContainer  />
        
        
      );
      }
}
