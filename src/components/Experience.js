const Experience = (props) => {
  return (
    <div className="general-container">
      <h2 className='title-text'>Experience Information</h2>
      {props.displayExperience ?
        <article className='general-text-container'>
          {/* {/* maybe loop over state and create h3s? */}
          <h3 className='general-text'>{props.company}</h3>
          <h3 className='general-text'>{props.position}</h3>
          <h3 className='general-text'>{props.duties}</h3>
          <h3 className='general-text'>{props.date}</h3>
          <button className='edit-btn' onClick={() => props.handleEdit(props.setDisplayExperience)}>Edit</button>
        </article> :
        <form onSubmit={(e) => {
          e.preventDefault()
          props.handleSubmit(props.setDisplayExperience)
        }} className="general-form">
          <label htmlFor="company">Company: </label>
          <input
            className='general-input'
            type="text"
            placeholder="Company"
            id="company"
            value={props.company}
            onChange={(e) => props.handleChange(e, props.setExperience)}
          />
          <label htmlFor="position">Position: </label>
          <input
            className='general-input'
            type="text"
            placeholder="Position Held"
            id="position"
            value={props.position}
            onChange={(e) => props.handleChange(e, props.setExperience)}
          />
          <label htmlFor="duties">Duties: </label>
          <input
            className='general-input'
            type="text"
            placeholder="Duties"
            id="duties"
            value={props.duties}
            onChange={(e) => props.handleChange(e, props.setExperience)}
          />
          <label htmlFor="date">Date: </label>
          <input
            className='general-input'
            type="text"
            placeholder="Date"
            id="date"
            value={props.date}
            onChange={(e) => props.handleChange(e, props.setExperience)}
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
 
export default Experience;