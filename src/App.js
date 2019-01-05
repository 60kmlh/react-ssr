import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom' 
import PageA from './component/PageA'
import PageB from './component/PageB'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initCount || 0
    }
  }

  render() {
    return (
      <div>
        首页
        <div>
          <button onClick={() => {this.setState({count: this.state.count + 1})}}>+</button>
          <div>{this.state.count}</div>
        </div>
        <Link to='/'>跳转到pageA</Link>
        <br/>
        <Link to='/pageb'>跳转到pageB</Link>
        <Switch>
          <Route exact path="/" component={ PageA } />
          <Route exact path="/pageb" component={ PageB } />
        </Switch>
      </div>
    )
  }
}

export default App
