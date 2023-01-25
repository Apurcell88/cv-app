const Education = (props) => {
  return (
    <div className="general-container">
      <h2 className='title-text'>Education Information</h2>
      {props.displayEducation ?
        <article className='general-text-container'>
          {/* {/* maybe loop over state and create h3s? */}
          <h3 className='general-text'>{props.school}</h3>
          <h3 className='general-text'>{props.titleOfStudy}</h3>
          <h3 className='general-text'>{props.dateOfStudy}</h3>
          <button className='edit-btn' onClick={() => props.handleEdit(props.setDisplayEducation)}>Edit</button>
        </article> :
        <form onSubmit={(e) => {
          e.preventDefault()
          props.handleSubmit(props.setDisplayEducation)
        }} className="general-form">
          <label htmlFor="school">School: </label>
          <input
            className='general-input'
            type="text"
            placeholder="School"
            id="school"
            value={props.school}
            onChange={(e) => props.handleChange(e, props.setEducation)}
          />
          <label htmlFor="titleOfStudy">Title of Study: </label>
          <input
            className='general-input'
            type="text"
            placeholder="Title of study"
            id="titleOfStudy"
            value={props.titleOfStudy}
            onChange={(e) => props.handleChange(e, props.setEducation)}
          />
          <label htmlFor="dateOfStudy">Date of Study: </label>
          <input
            className='general-input'
            type="text"
            placeholder="Date of study"
            id="dateOfStudy"
            value={props.dateOfStudy}
            onChange={(e) => props.handleChange(e, props.setEducation)}
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
 
export default Education;