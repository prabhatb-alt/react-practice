// import React, { Component } from 'react'

//  class Sample extends Component {
//     constructor(){
//         super()
//         this.state = {
//             count: 0,
//         }
//     }
//     increment = () => {
//         this.setState({count: this.state.count + 1})
//     }
//   render() {
//     return (
//       <div>
//         <h1>This is a sample component</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }

// export default Sample


import React from 'react'
import { useState } from 'react'

function Sample() {
  // let count=0
  const [count, setCount]=useState(0)
  
  const increment = () => {
       setCount(count + 1)
    }

    const decrement = () => {
       setCount(count - 1)
    }
  return (
    <div>
      <h1>This is a sample component</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Sample


