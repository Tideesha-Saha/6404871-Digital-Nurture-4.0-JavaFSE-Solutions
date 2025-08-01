export default function CourseDetails({ show }) {
  return (
    <div className="column">
      <h1>Course Details</h1>
      {
        show
          ? <>
              <div>
                <h2>Angular</h2>
                <p>4/5/2021</p>
              </div>
              <div>
                <h2>React</h2>
                <p>6/3/20201</p>
              </div>
            </>
          : <p>No courses available.</p>
      }
    </div>
  );
}
