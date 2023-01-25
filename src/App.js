import './App.css';
import React from 'react';
import Header from './components/Header';
import GeneralInfo from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  // -------- General Info state --------
  const [info, setInfo] = React.useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const [displayInfo, setDisplayInfo] = React.useState(false);
  // -------- General Info state ends here --------

  // -------- Education Info state --------
  const [education, setEducation] = React.useState({
    school: '',
    titleOfStudy: '',
    dateOfStudy: ''
  })

  const [displayEducation, setDisplayEducation] = React.useState(false);
  // -------- Education Info state ends here --------

  // -------- Experience Info state --------
  const [experience, setExperience] = React.useState({
    company: '',
    position: '',
    duties: '',
    date: ''
  })

  const [displayExperience, setDisplayExperience] = React.useState(false);
  // -------- Experience Info state ends here --------

  const handleChange = (e, setState) => {
    const { id, value } = e.target;
    setState(prevInfo => {
      return {
        ...prevInfo,
        [id]: value
      }
    })
  }

  const handleSubmit = (setState) => {
    // e.preventDefault();
    setState(prevInfo => {
      return !prevInfo;
    });
  }

  const handleEdit = (setState) => {
    setState(false);
  }

  return (
    <div className="App">
      <Header/>
      <GeneralInfo
        name={info.name}
        email={info.email}
        phoneNumber={info.phoneNumber}
        setInfo={setInfo}
        displayInfo={displayInfo}
        setDisplayInfo={setDisplayInfo}
        handleChange={handleChange}
        handleEdit={handleEdit}
        handleSubmit={handleSubmit}
      />
      <Education
        school={education.school}
        titleOfStudy={education.titleOfStudy}
        dateOfStudy={education.dateOfStudy}
        setEducation={setEducation}
        displayEducation={displayEducation}
        setDisplayEducation={setDisplayEducation}
        handleChange={handleChange}
        handleEdit={handleEdit}
        handleSubmit={handleSubmit}
      />
      <Experience
        company={experience.company}
        position={experience.position}
        duties={experience.duties}
        date={experience.date}
        setExperience={setExperience}
        displayExperience={displayExperience}
        setDisplayExperience={setDisplayExperience} 
        handleChange={handleChange}
        handleEdit={handleEdit}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
