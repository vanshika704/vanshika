import React from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import Navbar from '../components/navbar';
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
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x48c6fa,
      midtoneColor: 0x9fc5e8,
      lowlightColor: 0x000000,
      baseColor: 0xffffff,
      waveHeight: 10,
      waveSpeed: 1.0,
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
      backgroundColor: '#000000',
    };

    return (
      <div ref={this.vantaRef} style={style}>
        <Navbar />

        {/* Container for flex alignment */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full p-4 md:p-20 absolute inset-0 z-20">
          {/* LensDemoThird positioned above the background */}
          <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <LensDemoThird />
          </div>

          {/* Lens component */}
          <div className="w-full md:w-1/2 flex justify-center p-4 md:p-0">
            <Lens>
              <div className="w-full max-w-md rounded-3xl overflow-hidden bg-gradient-to-r from-[#32323292] to-[#24242486] p-8">
                <div className="relative z-10">
                  <div className="text-white text-xl md:text-xl font-medium font-poppins">
                    Hi, I’m Vanshika, a creative and driven software engineer specializing in building seamless, high-performance applications using Flutter, Firebase, and React. I thrive on turning ideas into reality with clean, efficient code. Currently, I’m diving into the world of Node.js to expand my backend expertise. Lets build something amazing together!
                  </div>
                </div>
              </div>
            </Lens>
          </div>
        </div>

        {/* HR with styling */}
        <hr
          style={{
            boxShadow: '0 4px 15px rgba(255, 255, 255, 1)',
            border: 'none',
            height: '1px',
            margin: '20px 0',
          }}
        />
      </div>
    );
  }
}

export default About;
