import Education from "./Education";
import Experience from "./Experience";
import Introuction from "./Introduction";
import "../styles/resume.css";

export default function Resume({ profile, educationList, experienceList }) {
  return (
    <div className='resume'>
      <Introuction {...profile} />
      <Education eductionList={educationList} />
      <Experience experienceList={experienceList} />
    </div>
  );
}
