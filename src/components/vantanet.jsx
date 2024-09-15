import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NET from 'vanta/dist/vanta.net.min'; // Make sure the Vanta effect you want is imported
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyComponent1 = () => {
  const vantaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let vantaEffect = null;

    if (window.THREE) {
      vantaEffect = NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xa9a9a9,
        backgroundColor: 0xffffff,
      });
    } else {
      console.error('THREE.js is not loaded. Ensure it is included in the document head.');
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  const handleExploreClick = () => {
    navigate('/about');
  };

  return (
    <div ref={vantaRef} className="w-screen h-screen absolute top-0 left-0 overflow-hidden">
      <div><Navbar /></div>

      <div className="flex flex-row items-start mt-20 ml-12 w-full max-w-screen-lg">
        <div className="text-5xl font-bold mb-12 ml-12 mt-5">
          Hi Everyone !!! <br />
          I am Vanshika <br />
          FrontEnd<br />
          <div className="flex items-center">
            Developer
            <img src='src/assets/pixel-art-12601_256.gif' className='ml-2 mb-2 h-24' alt="icon" />
          </div>
          <div className="flex space-x-4 mt-4">
            <button type="button" className="btn btn-dark resume">Resume</button>
            <button type="button" className="btn btn-dark resume" onClick={handleExploreClick}>Explore</button>
          </div>
        </div>
        <div className="flex absolute right-1 h-full mb-52">
          <img src="src/assets/IMG-20240117-WA0060.jpg" alt="example" className="rounded-full h-96 w-96  transition-transform duration-300 ease-in-out shadow-lg hover:translate-y-5 hover:shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default MyComponent1;
