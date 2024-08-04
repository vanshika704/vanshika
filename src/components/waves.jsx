import React from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import Navbar from './navbar';

class WavesComponent extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
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
        <div><Navbar /></div>
        
       
      </div>
    );
  }
}

export default WavesComponent;
