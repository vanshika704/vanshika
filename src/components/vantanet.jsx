import { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FlipWordsDemo } from './flipwords';
import img1 from '../assets/WhatsApp Image 2024-09-20 at 14.08.28_0f46e553.jpg'
const MyComponent1 = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;

    if (window.THREE) {
      vantaEffect = NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
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

  return (
    <div ref={vantaRef} className="w-screen h-screen absolute top-0 left-0 overflow-hidden">
      {/* Ensure Navbar is positioned correctly */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Container for alignment */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full p-4 lg:p-20 absolute inset-0 z-20">
        
        {/* FlipWordsDemo section */}
        <div className="flex-1 lg:mr-8 mb-4 lg:mb-0 flex items-center justify-center lg:justify-start">
          <FlipWordsDemo />
        </div>

        {/* Image section */}
        <div className="flex-1 flex items-center justify-center lg:justify-end lg:mr-40">
          <img
            src= {img1}
            alt="example"
            className="rounded-full w-48 h-48 sm:w-56 sm:h-56 lg:w-96 lg:h-96 transition-transform duration-300 ease-in-out shadow-lg hover:translate-y-5 hover:shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default MyComponent1;
