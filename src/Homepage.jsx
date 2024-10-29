import React, { Component } from 'react'

export class Homepage extends Component {
  render() {
    return (
      <div className='w-full h-screen bg-slate-400 flex items-center justify-center flex-col'>
        <h3 className='text-green-700 text-2xl'>
            Welcome this is user Home page
        </h3>
        <h4 className='text-1xl'> Login success</h4>
      </div>
    )
  }
}

export default Homepage