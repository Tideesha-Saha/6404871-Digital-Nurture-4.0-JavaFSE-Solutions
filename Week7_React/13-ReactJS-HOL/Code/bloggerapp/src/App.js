import BlogDetails from "./BlogDetails";
import BookDetails from "./BookDetails";
import CourseDetails from "./CourseDetails";
import './App.css';

function App() {
  const showBlogs = true;
  const showCourses = true;
  const showBookPrice = true;

  return (
    <div className="container">
      <CourseDetails show={showCourses} />
      <BookDetails showBookPrice={showBookPrice} />
      <BlogDetails show={showBlogs} />
    </div>
  );
}
export default App;