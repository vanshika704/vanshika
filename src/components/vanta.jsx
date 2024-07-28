import React from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
// import * as THREE from 'three'; // Ensure three.js is available
import Navbar from './navbar';

class MyComponent extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
   
      backgroundColor: 0xffffff, // White background
      color1: 0xff4500, // Yellow color
      color2: 0xff4500, // Orange color
      birdSize: 1.0, // Adjust the bird size if needed
      speedLimit: 3.0, // Adjust the speed of birds if needed
      separation: 50.0, // Adjust the separation between birds if needed
      alignment: 50.0, // Adjust the alignment of birds if needed
      cohesion: 50.0 // Adjust the cohesion of birds if needed
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
    };

    return (
      <div ref={this.vantaRef} style={style}>
        <div>
          <Navbar />
        </div>
        <div className="image-container">
          <img src="src/assets/IMG-20240117-WA0060.jpg" alt="example" />
        </div>
      </div>
    );
  }
}

export default MyComponent;
