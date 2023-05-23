import React, { Component } from 'react'
import loadingamana from './imgs/loadingspinner.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={loadingamana} alt="loading" className="src" />
      </div>
    )
  }
}
