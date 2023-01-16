import React from 'react';

const GeneralInfo = () => {
  const [info, setInfo] = React.useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    // update state based on values from inputs
    setInfo(prevInfo => {
      const { id, value } = e.target;
      return {
        ...prevInfo,
        [id]: value
      }
    });
  }

  return (
    <div className="general-container">
      <h2 className='title-text'>General Information</h2>
      <form className="general-form">
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
      </form>
      <article className='general-text-container'>
        <h3 className='general-text'>{info.name}</h3>
        <h3 className='general-text'>{info.email}</h3>
        <h3 className='general-text'>{info.phoneNumber}</h3>
      </article>
    </div>
  );
}
 
export default GeneralInfo;