import React from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
// import * as THREE from 'three'; // Ensure THREE.js is available
import Navbar from './navbar';
import styled from 'styled-components';

// Define a styled component with responsive styles
const VantaContainer = styled.div`
  width: 100vw;
  height: 100vh; /* Default for large screens */
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background-size: cover; /* Ensures the background image covers the entire viewport */

  @media (max-width: 1024px) { /* Medium screens (tablets, etc.) */
    height: 200vh;
  }

  @media (max-width: 768px) { /* Small screens (phones, etc.) */
    height: 400vh;
  }
`;

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
    });
  }

  componentWillUnmount() {
    // Clean up the Vanta.js effect
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return (
      <VantaContainer ref={this.vantaRef}>
        <Navbar />
      </VantaContainer>
    );
  }
}

export default MyComponent;
