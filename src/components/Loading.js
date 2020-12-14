import React from 'react'
import LoadingGIF from '../assets/images/loading.gif'

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-white bg-opacity-50 z-30">
      <figure className="w-10">
        <img src={LoadingGIF} alt="Loading..."/>
      </figure>
    </div>
  )
}

export default Loading
