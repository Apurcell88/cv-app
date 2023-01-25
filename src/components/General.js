import React from 'react';

const GeneralInfo = (props) => {
  return (
    <div className="general-container">
      <h2 className='title-text'>General Information</h2>
      {props.displayInfo ?
        <article className='general-text-container'>
          {/* {/* maybe loop over state and create h3s? */}
          <h3 className='general-text'>{props.name}</h3>
          <h3 className='general-text'>{props.email}</h3>
          <h3 className='general-text'>{props.phoneNumber}</h3>
          <button className='edit-btn' onClick={() => props.handleEdit(props.setDisplayInfo)}>Edit</button>
        </article> :
        <form onSubmit={(e) => {
          e.preventDefault()
          props.handleSubmit(props.setDisplayInfo)
        }} className="general-form">
          <label htmlFor="name">Full Name: </label>
          <input
            className='general-input'
            type="text"
            placeholder="Full Name"
            id="name"
            value={props.name}
            onChange={(e) => props.handleChange(e, props.setInfo)}
          />
          <label htmlFor="email">Email: </label>
          <input
            className='general-input'
            type="email"
            placeholder="Email"
            id="email"
            value={props.email}
            onChange={(e) => props.handleChange(e, props.setInfo)}
          />
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            className='general-input'
            type="text"
            placeholder="Phone Number"
            id="phoneNumber"
            value={props.phoneNumber}
            onChange={(e) => props.handleChange(e, props.setInfo)}
          />
          <input
            type="submit"
            value="Submit"
            className="btn"
          />
        </form>}
    </div>
  );
}
 
export default GeneralInfo;