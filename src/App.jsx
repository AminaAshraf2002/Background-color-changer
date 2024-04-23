import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [background, setBackground] = useState()

  useEffect(() => {
    
    const mainPartElement = document.querySelector('.mainpart')
    if (mainPartElement) {
      mainPartElement.style.backgroundColor = background
    }
  }, [background])

  const bgChange = (color) => {
    setBackground(color)
  }

  return (
    <div className="mainpart d-flex justify-content-center align-items-center flex-column" style={{ padding: 'auto' }}>
      <h1 className='pb-5 fw-bolder'>Background Color Changer</h1>
      <em className="text-secondary pb-3">Select the background colour</em>
      <div className='d-flex justify-content-center align-items-center flex-wrap'>
        <button className="btn btn-light me-3 text-danger fw-bolder mb-3" style={{ width: '120px' }} onClick={() => bgChange('#F25278')} type="button">PunchPink</button>
        <button className="btn btn-light me-3 text-info fw-bolder mb-3 " style={{ width: '120px' }} onClick={() => bgChange('skyBlue')} type="button">SkyBlue</button>
        <button className="btn btn-light me-3 text-dark fw-bolder mb-3 " style={{ width: '120px' }} onClick={() => bgChange('#33363d')}>LightBlack</button>
        <button className="btn btn-light me-3 text-primary fw-bolder mb-3" style={{ width: '120px' }} onClick={() => bgChange('blue')} type="button">Blue</button>
        <button className="btn btn-light me-3 text-secondary fw-bolder mb-3" style={{ width: '120px' }} onClick={() => bgChange('grey')} type="button">Grey</button>
        <button className="btn btn-light me-3 text-success fw-bolder mb-3" style={{ width: '120px' }} onClick={() => bgChange('#7CBF4E')} type="button">TreeGreen</button>
        <button className="btn btn-light me-3 text-primary fw-bolder mb-3" style={{ width: '120px' }} onClick={() => bgChange('#007FF0')} type="button">AzureBlue</button>
        <button className="btn btn-light me-3 text-danger fw-bolder mb-3" style={{ width: '120px' }} onClick={() => bgChange('red')} type="button">Red</button>
        <button className="btn btn-light me-3 text-warning fw-bolder mb-3" style={{ width: '120px' }} onClick={() => bgChange('yellow')} type="button">Yellow</button>
        <button className="btn btn-light me-3 fw-bolder mb-3" style={{ width: '120px'}} onClick={() => bgChange("white")}>Reset</button>
      </div>
    </div>
  )
}

export default App