import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Index.css'

@CSSModules(styles)
export default class Index extends Component {
  render () {
    return (
      <div styleName="index">
        Test
      </div>
    )
  }
}
