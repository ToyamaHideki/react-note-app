import React from 'react'

const Main = () => {
  return (
    <div className='main'>
      <div className="main__noteEdit">
        <input type="text" />
        <textarea placeholder="Write contents here!" ></textarea>
      </div>

      <div className="main__notePreview">
        <h1 className='main__previewTitle'> Title </h1>
        <div className='main__markdownPreciew'> Note Contents</div>
      </div>

    </div>
  )
}

export default Main