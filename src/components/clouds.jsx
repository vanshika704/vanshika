import React from 'react';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import Navbar from './navbar';




class CloudsComponent extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = CLOUDS({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      skyColor: 0x48c6fa,
      cloudColor: 0xbcd7ff
//       skyColor: 0x87CEEB,    // Light sky blue
// cloudColor: 0xbcd7ff   // Light blue
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

export default CloudsComponent;
