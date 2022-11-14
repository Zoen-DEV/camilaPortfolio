'use client'
import React from 'react'

const ShowPic = ({pic}) => {
  return (
    <div className='pic_container'>
        <img src={pic} alt="photo full" />
    </div>
  )
}

export default ShowPic