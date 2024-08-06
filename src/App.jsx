import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Resume from "./components/Resume";

const defaultEducationList = [
  {
    id: uuidv4(),
    startDate: "",
    endDate: "",
    boardName: "",
    courseName: "",
    address: "",
  },
];
const defaultExperienceList = [
  {
    id: uuidv4(),
    startDate: "",
    endDate: "",
    companyName: "",
    position: "",
    address: "",
    description: "",
  },
];

const defaultProfile = {
  fullName: "",
  address: "",
  phone: "",
  email: "",
};

function App() {
  const [profile, setProfile] = useState(defaultProfile);

  const [educationList, setEducationList] = useState(defaultEducationList);

  const [experienceList, setExperienceList] = useState(defaultExperienceList);

  const profileHandler = (profile) => {
    setProfile({
      fullName: profile.fullName,
      address: profile.address,
      email: profile.email,
      phone: profile.phone,
    });
  };

  const eduHandler = (edu, newEdu, update, remove) => {
    let eduCopy = educationList.slice(0);
    if (newEdu) {
      eduCopy.push(edu);
    } else if (update) {
      let index = eduCopy.findIndex((education) => education.id === edu.id);
      eduCopy[index] = edu;
    } else if (remove) {
      eduCopy = eduCopy.filter((education) => education.id != edu.id);
    }
    setEducationList([...eduCopy]);
  };

  const expHandler = (exp, newExp, update, remove) => {
    let expCopy = experienceList.slice(0);
    if (newExp) {
      expCopy.push(exp);
    } else if (update) {
      let index = expCopy.findIndex((experience) => experience.id === exp.id);
      expCopy[index] = exp;
    } else if (remove) {
      expCopy = expCopy.filter((experience) => experience.id != exp.id);
    }
    setExperienceList([...expCopy]);
  };
  return (
    <>
      <div className='edit'>
        <Content
          profileHandler={profileHandler}
          profile={profile}
          eduHandler={eduHandler}
          educationList={educationList}
          expHandler={expHandler}
          experienceList={experienceList}
        />
      </div>
      <div className='view'>
        <Resume
          profile={profile}
          educationList={educationList}
          experienceList={experienceList}
        />
      </div>
    </>
  );
}

export default App;
