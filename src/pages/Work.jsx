

import Navbar from "../components/navbar";
import "../index.css"
import FOG from 'vanta/dist/vanta.fog.min';
import React from 'react';


// import MyBook from "../components/ui/aboutme";
import { AnimatedPinDemo } from "../components/ui/projects";
class Work extends React.Component {
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
        width: '1420px',
        height: '1400px',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        backgroundColor: '#000000', // Ensure the background is black
      };
  
      return (
        <div ref={this.vantaRef} style={style}>
          <div><Navbar /></div>
 {/* <Projects/> */}
 {/* <MyBook/> */}



 <AnimatedPinDemo/>
        </div>
      );
    }
  }
  
  export default Work;
  