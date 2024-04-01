// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  RandomNumberGenerator = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="app-container">
        <div className="component-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.RandomNumberGenerator}
            >
              Generate
            </button>
          </div>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
