import React from 'react'

const inputs = {
    input1: 1,
    input2: 2,
    sum: null
  }


export default class Add extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      inputs: inputs
    }
  }

  render(){
    console.log('rendered')
    return(
      <div>
        <form onSubmit={this.addInputs.bind(this)}>
          <div>Hello World!</div>
          <input type="text" placeholder="var a" ref="input1"></input>
          <input type="text" placeholder="var b" ref="input2"></input>
          <button>add</button>
          <p>{inputs.sum}</p>
        </form>
      </div>
    )
  }

  addInputs(event){
    event.preventDefault();

    const input1 = parseInt(this.refs.input1.value);
    const input2 = parseInt(this.refs.input2.value);
    const sum = input1 + input2

    this.state.inputs.sum = sum;

    console.log( 'input1 + input2: ', sum )

    this.setState({ inputs: this.state.inputs })
  }

}
