import React from 'react';
import Add from './add';
import Calculator from './calculator';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Add />
        <Calculator />
      </div>
    )
  }
}
