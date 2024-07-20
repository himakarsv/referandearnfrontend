import React from 'react'
import image from './images/image2.jpg';
import ReferButton from './ReferButton'
export default function Nextone() {
  return (
    <div className='nextone'>
      <img src={image} alt="hi" className='nimage2'/>
      <ReferButton />
    </div>
  )
}
