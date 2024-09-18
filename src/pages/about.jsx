

import React from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import Navbar from '../components/navbar'
import { LensDemoThird } from '../components/ui/lens1';
import { Lens } from '../components/ui/lens';


class About extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = FOG({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      // highlightColor: 0x000000 ,// Light blue
      // midtoneColor: 0x9fc5e8,   // Slightly lighter light blue
      // lowlightColor: 0x007acc,   // Darker blue for contrast
      // baseColor: 0x7bc2e8,      // Black background
      // waveHeight: 10,
      // waveSpeed: 1.0
      highlightColor: 0x48c6fa,  // Dark blue
midtoneColor: 0x9fc5e8,    // Slightly lighter light blue
lowlightColor: 0x000000,   // Black for contrast
baseColor: 0xffffff,       // White background
waveHeight: 10,
waveSpeed: 1.0

// highlightColor: 0x808080,  // Grey
// midtoneColor: 0xbfbfbf,    // Light grey
// lowlightColor: 0x404040,   // Dark grey for contrast
// baseColor: 0xffffff,       // White background
// waveHeight: 10,
// waveSpeed: 1.0
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    const style = {
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      top: 0,
      left: 0,
      overflow: 'hidden',
      backgroundColor: '#000000', // Ensure the background is black
    };

    return (
      <div ref={this.vantaRef} style={style}>
        <div><Navbar /></div>
       

        {/* LensDemoThird positioned above the background */}
        <div className="absolute ml-20 inset-0 flex items-center z-20">
          <LensDemoThird />
        </div>

        {/* HR with styling */}
        <hr
          style={{
            boxShadow: '0 4px 15px rgba(255, 255, 255, 1)', // Strong white shadow
            border: 'none', // Remove default border
            height: '1px', // Set your desired hr height
          }}
        />

        {/* Lens component */}
        <div className="absolute right-44 mt-20  flex  z-20">
          <Lens>
            <div className="w-full mt-10 ml-40 relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#32323292] to-[#24242486] p-8 my-10">
              {/* <Rays />
              <Beams/> */}
              <div className="relative z-10">
              <div className="text-white mt-0  text-2xl font-medium  mr-0 font-poppins">
          Hi, I’m Vanshika, a creative and driven software engineer specializing in building seamless, high-performance applications using Flutter, Firebase, and React. I thrive on turning ideas into reality with clean, efficient code. Currently, I’m diving into the world of Node.js to expand my backend expertise. Lets build something amazing together!
        </div>
              </div>
            </div>
          </Lens>
        </div>

        {/* About Me Section */}
       
      </div>
     
    );
  }
}

export default About;
