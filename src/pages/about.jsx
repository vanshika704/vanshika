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

        {/* LensDemoThird positioned above the background */}
        <div className="absolute ml-20 inset-0 flex items-center z-20 mt-10 md:mt-0">
          <LensDemoThird />
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

        {/* Lens component */}
        <div className="absolute right-10 md:right-44 mt-6 flex z-20 p-4 md:p-0">
          <Lens>
            <div className="w-full max-w-md rounded-3xl overflow-hidden bg-gradient-to-r from-[#32323292] to-[#24242486] p-8 my-10">
              <div className="relative z-10">
                <div className="text-white text-xl md:text-xl font-medium font-poppins">
                  Hi, I’m Vanshika, a creative and driven software engineer specializing in building seamless, high-performance applications using Flutter, Firebase, and React. I thrive on turning ideas into reality with clean, efficient code. Currently, I’m diving into the world of Node.js to expand my backend expertise. Lets build something amazing together!
                </div>
              </div>
            </div>
          </Lens>
        </div>
      </div>
    );
  }
}

export default About;
