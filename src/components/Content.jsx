import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/content.css";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import {
  mdiAccountCircle,
  mdiBagChecked,
  mdiChevronUp,
  mdiSchool,
} from "@mdi/js/mdi";

function ProfileEditor({ fullName, address, email, phone, profileHandler }) {
  const [profile, setProfile] = useState({ fullName, address, email, phone });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        className='edit-form'
        onSubmit={(e) => {
          e.preventDefault();
          profileHandler(profile);
        }}
      >
        <label htmlFor='fullName'>Full Name: </label>
        <input
          type='text'
          name='fullName'
          id='fullName'
          onChange={handleChange}
          value={profile.fullName}
        />

        <label htmlFor='address'>Address: </label>
        <input
          type='text'
          name='address'
          id='address'
          onChange={handleChange}
          value={profile.address}
        />

        <label htmlFor='email'>Email </label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={handleChange}
          value={profile.email}
        />

        <label htmlFor='phone'>Phone </label>
        <input
          type='tel'
          name='phone'
          id='phone'
          onChange={handleChange}
          value={profile.phone}
        />
        <input className='btn btn-submit' type='submit' value='submit' />
      </form>
    </>
  );
}

function Education({
  id,
  courseName,
  boardName,
  address,
  startDate,
  endDate,
  eduHandler,
}) {
  const [edu, setEdu] = useState({
    id,
    courseName,
    boardName,
    address,
    startDate,
    endDate,
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className='content-title'>
        {edu.courseName || "Title"}
        <Icon path={isOpen ? mdiChevronUp : mdiChevronDown} size={1.5} />
      </div>
      <form
        className={isOpen ? "edit-form" : "hidden"}
        onSubmit={(e) => {
          e.preventDefault();
          eduHandler(edu, false, true, false);
        }}
      >
        <label htmlFor='courseName'>Course Name </label>
        <input
          type='text'
          name='courseName'
          id='courseName'
          onChange={(e) => setEdu({ ...edu, courseName: e.target.value })}
          value={edu.courseName}
        />

        <label htmlFor='address'>Address </label>
        <input
          type='text'
          name='address'
          id='address'
          onChange={(e) => setEdu({ ...edu, address: e.target.value })}
          value={edu.address}
        />

        <label htmlFor='boardName'>Board </label>
        <input
          type='text'
          name='boardName'
          id='boardName'
          onChange={(e) => setEdu({ ...edu, boardName: e.target.value })}
          value={edu.boardName}
        />

        <label htmlFor='startDate'>Start Date </label>
        <input
          type='text'
          name='startDate'
          id='startDate'
          onChange={(e) => setEdu({ ...edu, startDate: e.target.value })}
          value={edu.startDate}
        />
        <label htmlFor='endDate'>End Date </label>
        <input
          type='text'
          name='endDate'
          id='endDate'
          onChange={(e) => setEdu({ ...edu, endDate: e.target.value })}
          value={edu.endDate}
        />
        <input className='btn btn-submit' type='submit' value='submit' />
        <button
          className='btn btn-del'
          type='button'
          onClick={() => eduHandler(edu, false, false, true)}
        >
          Delete
        </button>
      </form>
    </>
  );
}

function NewEducation({ eduHandler, newEduState }) {
  const [newEdu, setNewEdu] = useState({
    boardName: "",
    startDate: "",
    endDate: "",
    courseName: "",
    address: "",
  });

  return (
    <>
      <form
        className='edit-form'
        onSubmit={(e) => {
          e.preventDefault();
          eduHandler({ ...newEdu, id: uuidv4() }, true);
          newEduState(false);
        }}
      >
        <label htmlFor='courseName'>Course Name </label>
        <input
          type='text'
          name='courseName'
          id='courseName'
          onChange={(e) => setNewEdu({ ...newEdu, courseName: e.target.value })}
          value={newEdu.courseName}
        />

        <label htmlFor='address'>Address: </label>
        <input
          type='text'
          name='address'
          id='address'
          onChange={(e) => setNewEdu({ ...newEdu, address: e.target.value })}
          value={newEdu.address}
        />

        <label htmlFor='boardName'>Board </label>
        <input
          type='text'
          name='board'
          id='board'
          onChange={(e) => setNewEdu({ ...newEdu, boardName: e.target.value })}
          value={newEdu.boardName}
        />

        <label htmlFor='startDate'>Start Date </label>
        <input
          type='text'
          name='startDate'
          id='startDate'
          onChange={(e) => setNewEdu({ ...newEdu, startDate: e.target.value })}
          value={newEdu.startDate}
        />
        <label htmlFor='endDate'>End Date </label>
        <input
          type='text'
          name='endDate'
          id='endDate'
          onChange={(e) => setNewEdu({ ...newEdu, endDate: e.target.value })}
          value={newEdu.endDate}
        />
        <input className='btn btn-submit' type='submit' value='submit' />
        <button
          className='btn btn-cancel'
          type='reset'
          onClick={() => {
            setNewEdu(newEdu);
            newEduState(false);
          }}
        >
          Cancel
        </button>
      </form>
    </>
  );
}

function EducationEditor({ educationList, eduHandler }) {
  const [newForm, setNewForm] = useState(false);

  return (
    <>
      {educationList.map((edu) => (
        <Education {...edu} eduHandler={eduHandler} key={edu.id} />
      ))}
      <button
        className={newForm === true ? "hidden btn btn-add" : "btn btn-add"}
        onClick={() => setNewForm(true)}
      >
        Add Education
      </button>
      {newForm && (
        <NewEducation newEduState={setNewForm} eduHandler={eduHandler} />
      )}
    </>
  );
}

function Experience({
  id,
  position,
  companyName,
  address,
  startDate,
  endDate,
  description,
  expHandler,
}) {
  const [exp, setExp] = useState({
    id,
    position,
    companyName,
    address,
    startDate,
    description,
    endDate,
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className='content-title'>
        {exp.companyName || "Company"}
        <Icon path={isOpen ? mdiChevronUp : mdiChevronDown} size={1.5} />
      </div>
      <form
        className={isOpen ? "edit-form" : "hidden"}
        onSubmit={(e) => {
          e.preventDefault();
          expHandler(exp, false, true, false);
        }}
      >
        <label htmlFor='companyName'>Company </label>
        <input
          type='text'
          name='companyName'
          id='companyName'
          onChange={(e) => setExp({ ...exp, companyName: e.target.value })}
          value={exp.companyName}
        />

        <label htmlFor='address'>Address </label>
        <input
          type='text'
          name='address'
          id='address'
          onChange={(e) => setExp({ ...exp, address: e.target.value })}
          value={exp.address}
        />

        <label htmlFor='position'>Position </label>
        <input
          type='text'
          name='position'
          id='position'
          onChange={(e) => setExp({ ...exp, position: e.target.value })}
          value={exp.position}
        />

        <label htmlFor='startDate'>Start Date </label>
        <input
          type='text'
          name='startDate'
          id='startDate'
          onChange={(e) => setExp({ ...exp, startDate: e.target.value })}
          value={exp.startDate}
        />
        <label htmlFor='endDate'>End Date </label>
        <input
          type='text'
          name='endDate'
          id='endDate'
          onChange={(e) => setExp({ ...exp, endDate: e.target.value })}
          value={exp.endDate}
        />
        <label htmlFor='description'>Description </label>
        <textarea
          name='description'
          id='description'
          onChange={(e) => setExp({ ...exp, description: e.target.value })}
        >
          {exp.description}
        </textarea>
        <input className='btn-submit btn' type='submit' value='submit' />
        <button
          className='btn btn-del'
          type='button'
          onClick={() => expHandler(exp, false, false, true)}
        >
          Delete
        </button>
      </form>
    </>
  );
}

function NewExperience({ expHandler, newExpState }) {
  const [newExp, setNewExp] = useState({
    companyName: "",
    startDate: "",
    endDate: "",
    position: "",
    address: "",
    description: "",
  });

  return (
    <>
      <form
        className='edit-form'
        onSubmit={(e) => {
          e.preventDefault();
          expHandler({ ...newExp, id: uuidv4() }, true);
          newExpState(false);
        }}
      >
        <label htmlFor='company'>Company </label>
        <input
          type='text'
          name='company'
          id='company'
          onChange={(e) =>
            setNewExp({ ...newExp, companyName: e.target.value })
          }
          value={newExp.company}
        />

        <label htmlFor='address'>Address </label>
        <input
          type='text'
          name='address'
          id='address'
          onChange={(e) => setNewExp({ ...newExp, address: e.target.value })}
          value={newExp.address}
        />

        <label htmlFor='position'>Position </label>
        <input
          type='text'
          name='position'
          id='position'
          onChange={(e) => setNewExp({ ...newExp, position: e.target.value })}
          value={newExp.position}
        />

        <label htmlFor='startDate'>Start Date </label>
        <input
          type='text'
          name='startDate'
          id='startDate'
          onChange={(e) => setNewExp({ ...newExp, startDate: e.target.value })}
          value={newExp.startDate}
        />
        <label htmlFor='endDate'>End Date </label>
        <input
          type='text'
          name='endDate'
          id='endDate'
          onChange={(e) => setNewExp({ ...newExp, endDate: e.target.value })}
          value={newExp.endDate}
        />
        <textarea
          name='description'
          id='description'
          onChange={(e) =>
            setNewExp({ ...newExp, description: e.target.value })
          }
        >
          {newExp.description}
        </textarea>
        <input className='btn btn-submit' type='submit' value='submit' />
        <button
          className='cancel btn-cancel'
          type='reset'
          onClick={() => {
            setNewExp(newExp);
            newExpState(false);
          }}
        >
          Cancel
        </button>
      </form>
    </>
  );
}

function ExperienceEditor({ experienceList, expHandler }) {
  const [newForm, setNewForm] = useState(false);
  return (
    <>
      {experienceList.map((exp) => (
        <Experience {...exp} expHandler={expHandler} key={exp.id} />
      ))}
      <button
        className={newForm === true ? "hidden btn-add btn" : "btn-add btn"}
        onClick={() => setNewForm(true)}
      >
        Add Experience
      </button>
      {newForm && (
        <NewExperience newExpState={setNewForm} expHandler={expHandler} />
      )}
    </>
  );
}

export default function Content({
  profileHandler,
  profile,
  educationList,
  eduHandler,
  expHandler,
  experienceList,
}) {
  return (
    <>
      <h2>Edit Content</h2>
      <div className='content-container'>
        <h3 className='content-heading'>
          <Icon path={mdiAccountCircle} size={1} /> Profile
        </h3>
        <ProfileEditor {...profile} profileHandler={profileHandler} />
      </div>
      <div className='content-container'>
        <h3 className='content-heading'>
          <Icon path={mdiSchool} size={1} /> Education
        </h3>
        <EducationEditor
          educationList={educationList}
          eduHandler={eduHandler}
        />
      </div>
      <div className='content-container'>
        <h3 className='content-heading'>
          <Icon path={mdiBagChecked} size={1} /> Experience
        </h3>
        <ExperienceEditor
          experienceList={experienceList}
          expHandler={expHandler}
        />
      </div>
    </>
  );
}
