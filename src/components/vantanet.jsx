import  { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NET from 'vanta/dist/vanta.net.min'; // Make sure the Vanta effect you want is imported
import "../index.css";
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
    navigate('/explore');
  };

  const style = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  };

  return (
    <div ref={vantaRef} style={style}>
      <div><Navbar /></div>

      <div className='center'>
        <div className='poppins-bold text'>
          Hi Everyone !!! <br />
          I am Vanshika <br />
          <div className='developer'>
            FrontEnd Developer 
            <img src='src/assets/pixel-art-12601_256.gif' height={120} className='icon' />
          </div>
          <div className='button-container'>
            <button type="button" className="btn btn-dark resume">Resume</button>
            <button type="button" className="btn btn-dark resume" onClick={handleExploreClick}>Explore</button>
          </div>
        </div>
        <div className="image-container">
          <img src="src/assets/IMG-20240117-WA0060.jpg" alt="example" />
        </div>
      </div>
    </div>
  );
};

export default MyComponent1;
