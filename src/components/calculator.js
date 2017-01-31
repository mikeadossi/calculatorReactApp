import React from 'react'

export default class Calculator extends React.Component{
  render(){
    return(
      <div>
        <div className="calculatorContainer">
          <input className="screen"></input>
          <input className="subScreen"></input>
            <div className="column1">
              <button>AC</button>
              <button>CE</button>
              <button>/</button>
              <button>x</button>
            </div>
            <div className="column2">
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>-</button>
            </div>
            <div className="column3">
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>+</button>
            </div>
            <div className="column4">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>=</button>
            </div>
            <div className="column5">
              <button>0</button>
              <button>.</button>
            </div>
        </div>
      </div>
    )
  }
}
