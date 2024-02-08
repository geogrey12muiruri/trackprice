import React from 'react'
import files from '../../data.json'

const Data = () => {
  return (
    <div>
      {Array.isArray(files) && files.map((file, index) => (
        <div key={index}>
          <h1>{file.county}</h1>
        </div>
      ))}
    </div>
  )
}

export default Data