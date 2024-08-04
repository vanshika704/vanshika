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
      highlightColor: 0x7bc2e8,
      midtoneColor: 0xc1dbf2,
      lowlightColor: 0xd1ff
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

export default FogComponent;
