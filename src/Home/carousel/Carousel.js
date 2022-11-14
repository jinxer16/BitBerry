import React from 'react'
import './Carousel.css'




function Carousel() {
  return (
    <>
        <div className='row d-flex justify-content-center'>
        <div className='col-md-12'>
        <div></div>
        <div className="toggle-switch-container">
  <div className="toggle-switch switch-vertical">
    <input id="toggle-a" type="radio" name="switch" defaultChecked="checked" />
    {/* <label htmlFor="toggle-a">Option A</label> */}
    <input id="toggle-b" type="radio" name="switch" />
    {/* <label htmlFor="toggle-b">Option B</label> */}
    <span className="toggle-outside">
      <span className="toggle-inside" />
    </span>
  </div>
</div>

        </div>

        </div>
    </>
  )
}

export default Carousel