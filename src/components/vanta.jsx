import React from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
// import * as THREE from 'three'; // Ensure THREE.js is available
import Navbar from './navbar';

class MyComponent extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    // Initialize the Vanta.js effect
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      backgroundColor: 0xe0f7fa, // Light cyan background
      color1: 0x333333, // Dark grey color for birds
      color2: 0xffffff, // White color for birds
      // Uncomment and adjust these properties if needed:
      // birdSize: 1.0, // Adjust the bird size if needed
      // speedLimit: 3.0, // Adjust the speed of birds if needed
      // separation: 50.0, // Adjust the separation between birds if needed
      // alignment: 50.0, // Adjust the alignment of birds if needed
      // cohesion: 50.0 // Adjust the cohesion of birds if needed
    });
  }

  componentWillUnmount() {
    // Clean up the Vanta.js effect
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
    };

    return (
      <div ref={this.vantaRef} style={style}>
        <Navbar />
      </div>
    );
  }
}

export default MyComponent;
