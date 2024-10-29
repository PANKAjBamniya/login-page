import React, { Component } from 'react'

export class Errorpage extends Component {
  render() {
    return (
      <div className='w-full h-screen bg-slate-400 flex items-center justify-center flex-col'>
        <h2 className='text-red-700 text-2xl'>This is Error page</h2>
        <h3 className='text-1xl'>plz try again letter</h3>
      </div>
    )
  }
}

export default Errorpage