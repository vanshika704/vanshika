import React from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import Navbar from './navbar';

class FogComponent extends React.Component {
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
      minHeight: 500.00,
      minWidth: 500.00,
      highlightColor: 0x48c6fa,  // Dark blue
      midtoneColor: 0x9fc5e8,    // Slightly lighter light blue
      lowlightColor: 0x000000,   // Black for contrast
      baseColor: 0xffffff,       // White background
      waveHeight: 10,
      waveSpeed: 1.0
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return (
      <div
        ref={this.vantaRef}
        className="w-screen h-screen absolute top-0 left-0 overflow-hidden bg-black flex justify-center items-center flex-col"
      >
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default FogComponent;
