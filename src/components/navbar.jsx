import { Link } from 'react-router-dom';
import '../index.css';

function Navbar() {
  return (
    <nav className="bg-white/30 backdrop-blur-lg shadow-md font-bold">
      <div className="container mx-auto flex items-center justify-between  px-4 lg:px-8">
        <Link className="flex items-center" to="/">
          <img 
            src='src/assets/output-onlinegiftools.gif' 
            alt="icon" 
            className="hidden lg:block" 
            style={{ height: '35px', width: 'auto' }} 
          />
        </Link>
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-700 rounded-lg lg:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => document.getElementById('navbarNav').classList.toggle('hidden')}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2z" clipRule="evenodd"></path>
          </svg>
        </button>
        <div className="hidden w-full lg:flex lg:items-center lg:w-auto" id="navbarNav">
          <ul className="flex flex-col mt-4 space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6 lg:mt-0">
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900" to="/achievements">Achievements</Link>
            </li>
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900" to="/education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900" to="/work">Work</Link>
            </li>
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
