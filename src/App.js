import './App.css';
import React from 'react';
import Header from './components/Header';
import GeneralInfo from './components/General';
import Education from './components/Education';

function App() {
  const [info, setInfo] = React.useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const [displayInfo, setDisplayInfo] = React.useState(false);

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
      <Education />
    </div>
  );
}

export default App;
