import React from 'react';
import NET from 'vanta/dist/vanta.net.min'; // Make sure the Vanta effect you want is imported
import "../index.css"
import Navbar from './navbar';
// In your main JavaScript file, import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


class MyComponent1 extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    
    if (window.THREE) {
      this.vantaEffect = NET({
        el: this.vantaRef.current,
       
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
        <div><Navbar/></div>

       <div className='center'>
          <div className='poppins-bold text'>Hi Everyone ! <br></br>
          I am Vanshika <br></br>
          Front End Developer </div>
          <div className="image-container">
          <img src="src/assets/IMG-20240117-WA0060.jpg" alt="example" />
        </div>
      </div>
      </div>
    );
  }
}

export default MyComponent1;
