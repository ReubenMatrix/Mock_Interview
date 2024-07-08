import React from 'react'
import image from '../assets/call.webp'

function CameraPreview() {
  return (
      <div className="rounded-lg overflow-hidden aspect-video bg-gray-200">
          <img
              src={image}
              width="640"
              height="480"
              alt="Camera preview"
              className="w-full h-full object-cover"
          />
      </div>

  )
}

export default CameraPreview
