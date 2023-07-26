import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {isShowClock: false}

  onToggleClock = () => {
    this.setState(prevState => ({
      isShowClock: !prevState.isShowClock,
    }))
  }

  render() {
    const {isShowClock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          onClick={this.onToggleClock}
          className="toggle-button"
        >
          {isShowClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {isShowClock && <Clock />}
      </div>
    )
  }
}

export default App
