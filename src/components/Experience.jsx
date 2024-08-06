import "../styles/experience.css";
function Time({ startDate, endDate }) {
  if (!startDate || !endDate) return null;
  return (
    <div>
      {startDate} to {endDate}
    </div>
  );
}
function Address({ address }) {
  return <div>{address}</div>;
}
function CompanyName({ companyName }) {
  return <div className='company'>{companyName}</div>;
}
function Postion({ position }) {
  return <div>{position}</div>;
}
function Description({ description }) {
  return <div>{description}</div>;
}

export default function Experience({ experienceList }) {
  const list = experienceList.map((exp) => {
    return (
      <div className='experience' key={exp.id}>
        <div className='left'>
          <CompanyName companyName={exp.companyName} />
          <Postion position={exp.position} />
        </div>
        <div className='right'>
          <Address address={exp.address} />
          <Time startDate={exp.startDate} endDate={exp.endDate} />
          <Description description={exp.description} />
        </div>
      </div>
    );
  });
  return (
    <>
      <h2 className='exp-title'>Experience</h2>
      <div className='exp-container'>{list}</div>
    </>
  );
}
