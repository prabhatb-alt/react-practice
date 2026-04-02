// import React from 'react'
// import { add } from "./utility"

// function Sample(props) {
//     console.log(add(2,4))
//   return (
//     <div>
//       <h2>Trending Topics</h2>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod voluptatum iure incidunt, temporibus sequi iusto, pariatur maxime commodi ducimus, nihil autem. Magni modi praesentium, fuga culpa ad animi laboriosam!</p>
//        <button
//           className="counter"
//           onClick={() => props.setCount((count) => count + 1)}
//         >
//           Count is {props.count}
//         </button>
//     </div>
//   )
// }

// export default Sample

// import React, {Component} from 'react'

// class Sample extends Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return (
//         <div>
//           <h2>Trending Topics</h2>
//            <p>Hi! This is a cool class component in <code>sample.jsx</code></p>
//            <br></br>
//            <button
//             className="counter"
//             onClick={() => this.props.setCount((count) => count + 1)}
//             >
//             Count is {this.props.count}
//             </button>
//         </div>
//     )
//     }
// }
// export default Sample

// import React, { Component } from 'react'

//  class Sample extends Component {
//     constructor(){
//         super()
//         this.state = {
//             count: 0
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

// import React from 'react'
// import { useState } from 'react'

// function Sample() {
//   const [count, setCount] = useState(0)

//   const increment = () => {
//     setCount(count + 1)
//   }
//   return (
//     <div>
//       <h1>This is a sample component</h1>
//       <h2>{count}</h2>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

// export default Sample

import React from 'react'
import { useState } from 'react'

function Sample() {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h1>This is a sample component</h1>
      <h2>{count}</h2>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Sample
