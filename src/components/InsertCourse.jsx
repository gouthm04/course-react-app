import React from 'react'
import NavBar from './NavBar'

const InsertCourse = () => {
  return (
    <div>
        <NavBar/>
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-6">
                            <label htmlFor="" className="form-label">Course Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-6">
                            <label htmlFor="" className="form-label">Duration</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-6">
                            <label htmlFor="" className="form-label">Fee</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-6">
                            <label htmlFor="" className="form-label">Mode</label>
                            <select name="" id="" className="form-select">
                                <option value="Online">Select your option</option>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>
                        <div className="col-12 col-sm-6">
                            <label htmlFor="" className="form-label">Trainer</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InsertCourse