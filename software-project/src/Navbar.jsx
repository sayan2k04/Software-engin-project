import './Navbar.css';

export default function Navbar() {
  function handleCourseSelection(event) {
    const value = event.target.value;
    if (value) {
      // Navigate to the respective course page
      window.location.href = `${value}.html`; // Ensure URLs match actual course pages
    }
  }

  return (
    <div>
      <nav className="navbar">
        <div className="container flex justify-between items-center"> {/* Adjust for alignment */}
        <b><p className="text-white text-2xl">E-Learning</p></b> {/* Title styled */}
          <ul className="flex space-x-4 text-white font-semibold">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li>
              <select 
                id="courseSelect" 
                className="course-dropdown" 
                onChange={handleCourseSelection}
              >
                <option value="" disabled selected>Courses</option>
                <option value="web-development">Web Development</option>
                <option value="machine-learning">Machine Learning</option>
                <option value="artificial-intelligence">Artificial Intelligence</option>
                <option value="app-development">App Development</option>
                <option value="C-Language">C Language</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="Block-chain">Block-chain</option>
                <option value="DSA">Data Structure & Algorithm</option>
              </select>
            </li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            <li><a href="sign.html" className="hover:text-gray-300">Sign Up</a></li>
            <li><a href="Login.html" className="hover:text-gray-300">Login</a></li>
          </ul>
        </div>
      </nav>
      <div className="background">
        <h1 className="hero-title">The Best Online Learning Platform</h1>
        {/* <p className='para'>Transform your future today! Discover a wide range of courses designed by industry experts to help you gain the skills needed in today's fast-paced world.</p> */}
      </div>
    </div>
  );
}
