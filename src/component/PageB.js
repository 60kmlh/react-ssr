import React, { Component } from 'react'

class PageA extends Component {
  render() {
    return (
      <div>
        <div>B页面</div>
        <img src={require('../assets/img/hat.jpg')} alt=""/>
      </div>
    )
  }
}

export default PageA
