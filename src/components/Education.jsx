import "../styles/education.css";
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
function BoardName({ boardName }) {
  return <div className='board'>{boardName}</div>;
}
function CourseName({ courseName }) {
  return <div>{courseName}</div>;
}

export default function Education({ eductionList }) {
  const list = eductionList.map((edu) => {
    return (
      <div className='education' key={edu.id}>
        <div className='left'>
          <BoardName boardName={edu.boardName} />
          <CourseName courseName={edu.courseName} />
        </div>
        <div className='right'>
          <Address address={edu.address} />
          <Time startDate={edu.startDate} endDate={edu.endDate} />
        </div>
      </div>
    );
  });
  return (
    <>
      <h2 className='edu-title'>Education</h2>
      <div className='edu-container'>{list}</div>
    </>
  );
}
