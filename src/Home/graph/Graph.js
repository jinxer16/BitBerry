import React from 'react'
import Graphs from "../../Assets/Images/Group139.png";
import './Graphs.css'

function Graph() {
  return (
    <div className='graph-over'>
        <div className='container-fluid graph-bg'>
        <div className='row d-flex justify-content-center'>
        <div className='col-md-8 graph-margin'>
        <img src={Graphs} className="img-fluid"/>

        </div>
        </div>

        </div>
    </div>
  )
}

export default Graph