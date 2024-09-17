import { useEffect, useRef } from 'react';

import NET from 'vanta/dist/vanta.net.min'; // Make sure the Vanta effect you want is imported
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FlipWordsDemo } from './flipwords';

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

 
  return (
    <div ref={vantaRef} className="w-screen h-screen absolute top-0 left-0 overflow-hidden">
      <div><Navbar /></div>

      <div className="mt-0 ml-12 w-full max-w-screen-lg relative">
        
          <FlipWordsDemo />
       

        {/* Wrapping buttons in the same container */}
       
      </div>

      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 mr-12">
        <img src="src/assets/IMG-20240117-WA0060.jpg" alt="example" className="rounded-full h-96 w-96 transition-transform duration-300 ease-in-out shadow-lg hover:translate-y-5 hover:shadow-2xl" />
      </div>
    </div>
  );
};

export default MyComponent1;
