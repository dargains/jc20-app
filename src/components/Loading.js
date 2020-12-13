import React from 'react'
import LoadingGIF from '../assets/images/loading.gif'

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <figure className="w-10">
        <img src={LoadingGIF} alt="Loading..."/>
      </figure>
    </div>
  )
}

export default Loading
