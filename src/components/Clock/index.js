import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.tickedId = setInterval(this.tick, 1000)
    console.log('this that')
  }

  componentWillUnmount() {
    clearInterval(this.tickedId)
  }

  tick = () => {
    this.setState({date: new Date()})
    console.log('this that')
  }

  render() {
    const {date} = this.state

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
