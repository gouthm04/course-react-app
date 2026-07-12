import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const InsertCourse = () => {
  const [input, changeInput] = useState({
    course_name: "",
    duration: "",
    fee: "",
    mode: "",
    trainer: "",
  });

  const inputHandler = (event) => {

    changeInput({
        ...input,[event.target.name] : event.target.value
    })
  }

  const readValue = () => {
    
    axios.post("https://host-demo-app.onrender.com/api/add-course",input)
    .then((response) => {
        console.log(response.data)
        alert(response.data.message)
    })
    .catch((error) => {
        alert("Failed to add course")
        console.log(error)
    })

  }

  return (
    <div>
      <NavBar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <label htmlFor="" className="form-label">
                  Course Name
                </label>
                <input type="text" className="form-control" name="course_name" value={input.course_name} onChange={inputHandler}/>
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="" className="form-label">
                  Duration
                </label>
                <input type="text" className="form-control" name="duration" value={input.duration} onChange={inputHandler}/>
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="" className="form-label">
                  Fee
                </label>
                <input type="text" className="form-control" name="fee" value={input.fee} onChange={inputHandler}/>
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="" className="form-label">
                  Mode
                </label>
                <select  id="" className="form-select" name="mode" value={input.mode} onChange={inputHandler}>
                  <option value="">Select your option</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="" className="form-label">
                  Trainer
                </label>
                <input type="text" className="form-control" name="trainer" value={input.trainer} onChange={inputHandler}/>
              </div>
              <div className="col-12">
                <button className="btn btn-success" onClick={readValue}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsertCourse;
