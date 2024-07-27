import React from 'react';
import NET from 'vanta/dist/vanta.net.min'; // Make sure the Vanta effect you want is imported

class MyComponent1 extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    // Initialize Vanta effect after ensuring window.THREE is available
    if (window.THREE) {
      this.vantaEffect = NET({
        el: this.vantaRef.current,
        // Example options, adjust as needed
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3fffff,
        backgroundColor: 0x40722
      });
    } else {
      console.error('THREE.js is not loaded. Ensure it is included in the document head.');
    }
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

    return <div ref={this.vantaRef} style={style} />;
  }
}

export default MyComponent1;
