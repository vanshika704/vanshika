import { Link } from 'react-router-dom';
import {
  IconHome,
  IconFileText,
  IconCode,
  IconFileCode,
  IconMessageCircle
} from '@tabler/icons-react';

function Navbar() {
  const links = [
    { title: 'Home', icon: <IconHome className="h-4 w-4 text-gray-700" />, href: '/' },
    { title: 'About', icon: <IconFileText className="h-4 w-4 text-gray-700" />, href: '/about' },
    { title: 'Skills', icon: <IconCode className="h-4 w-4 text-gray-700" />, href: '/skills' },
    { title: 'Projects', icon: <IconFileCode className="h-4 w-4 text-gray-700" />, href: '/work' },
    { title: 'Contact', icon: <IconMessageCircle className="h-4 w-4 text-gray-700" />, href: '/contact' },
  ];

  const toggleNavbar = () => {
    document.getElementById('navbarNav').classList.toggle('hidden');
  };

  return (
    <nav className="bg-white/30 backdrop-blur-lg shadow-md font-bold">
      <div className="container mx-auto flex items-center justify-between py-1 px-2 lg:px-4">
        <Link to="/" className="flex items-center">
          <img 
            src='src/assets/output-onlinegiftools.gif' 
            alt="icon" 
            className="hidden lg:block h-5 w-auto" 
          />
        </Link>
        
        <button
          className="lg:hidden p-1 text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2z" clipRule="evenodd"></path>
          </svg>
        </button>

        <div className="hidden lg:flex lg:items-center w-full lg:w-auto" id="navbarNav">
          <ul className="flex flex-col mt-1 lg:flex-row lg:space-x-3 lg:mt-0">
            {links.map((link, index) => (
              <li key={index} className="nav-item mt-2 lg:mt-0">
                <Link to={link.href} className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                  {link.icon}
                  <span className="hidden lg:inline text-sm">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
