import React from 'react'
import { RotatingLines } from "react-loader-spinner";
import './SpinerLoader.css'

const SpinerLoader = () => {
  return (
    <div className="spiner-loader">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>

  )
}

export default SpinerLoader
