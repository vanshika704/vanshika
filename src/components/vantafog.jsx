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
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0x7bc2e8, // Light blue
      midtoneColor: 0x9fc5e8,   // Slightly lighter light blue
      lowlightColor: 0x007acc,   // Darker blue for contrast
      baseColor: 0x000000,       // Black background
      waveHeight: 10,
      waveSpeed: 1.0
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
      </div>
    );
  }
}

export default FogComponent;
