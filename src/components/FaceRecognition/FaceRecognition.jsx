import React from 'react'
import './faceRecognition.css'
const FaceRecognition = ({imageUrl}) => {
  return (
    <>
    <div className='facerecognition'>
        <img src={imageUrl} alt="facerecognitionImage" />
    </div>
    </>
  )
}

export default FaceRecognition