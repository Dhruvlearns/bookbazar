import React from 'react';
import '../App.css';
import Photo from '../Photo';
import PhotoData from '../PhotoData'; // Ensure this import path is correct

export default function Maincontent() {
  const photodata = PhotoData.map((data) => (
    <Photo
      key={data.id}
      data={data}
    />
  ));

  return (
    <div className='MainContent'>
      <div className='tickmark'>
        <div className='tickmark1'>
          <div>
            <h1 className='heading'>
              Book Condition (used)
            </h1>
            <label className='lb1'>
              <input className='check' type="checkbox"/> Excellent
              <br />
              <input className='check' type="checkbox"/> Good
              <br />
              <input className='check' type="checkbox"/> Fair
            </label>
          </div>

          <hr className='horizontalRule'/>
          
          <div>
            <h1 className='heading'>
              Book Type
            </h1>
            <label className='lb1'>
              <input className='check' type="checkbox"/> Social Science
              <br />
              <input className='check' type="checkbox"/> Mathematics
              <br />
              <input className='check' type="checkbox"/> Physics
              <br />
              <input className='check' type="checkbox"/> Chemistry
              <br />
              <input className='check' type="checkbox"/> Computer
              <br />
              <input className='check' type="checkbox"/> Biology
              <br />
              <input className='check' type="checkbox"/> Hindi
              <br />
              <input className='check' type="checkbox"/> Sanskrit
              <br />
              <input className='check' type="checkbox"/> Physical education
            </label>
          </div>

          <hr className='horizontalRule'/>

          <div>
            <h1 className='heading'>
              Book Category
            </h1>
            <label className='lb1'>
              <input className='check' type="checkbox"/> 8th
              <br />
              <input className='check' type="checkbox"/> 9th
              <br />
              <input className='check' type="checkbox"/> 10th
              <br />
              <input className='check' type="checkbox"/> 11th
              <br />
              <input className='check' type="checkbox"/> 12th
            </label>
          </div>
        </div>
      </div>
      <div className='photo'>
        {photodata}
      </div>
    </div>
  );
}
