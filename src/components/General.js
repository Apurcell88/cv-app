import React from 'react';

const GeneralInfo = (props) => {
  // move state and handleChange to App.js and pass in as props?
  const [info, setInfo] = React.useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const [displayInfo, setDisplayInfo] = React.useState(false);

  const handleChange = (e) => {
    // update state based on values from inputs
    const { id, value } = e.target;
    setInfo(prevInfo => {
      return {
        ...prevInfo,
        [id]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayInfo(prevInfo => {
      return !prevInfo;
    });
  }

  const handleEdit = () => {
    setDisplayInfo(false);
  }

  return (
    <div className="general-container">
      <h2 className='title-text'>General Information</h2>
      {displayInfo ?
        <article className='general-text-container'>
          {/* {/* maybe loop over state and create h3s? */}
          <h3 className='general-text'>{info.name}</h3>
          <h3 className='general-text'>{info.email}</h3>
          <h3 className='general-text'>{info.phoneNumber}</h3>
          <button className='edit-btn' onClick={handleEdit}>Edit</button>
        </article> :
        <form onSubmit={handleSubmit} className="general-form">
          <label htmlFor="name">Full Name: </label>
          <input
            className='general-input'
            type="text"
            placeholder="Full Name"
            id="name"
            value={info.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email: </label>
          <input
            className='general-input'
            type="email"
            placeholder="Email"
            id="email"
            value={info.email}
            onChange={handleChange}
          />
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            className='general-input'
            type="text"
            placeholder="Phone Number"
            id="phoneNumber"
            value={info.phoneNumber}
            onChange={handleChange}
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