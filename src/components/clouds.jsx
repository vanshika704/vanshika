import React, { Component } from 'react';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import Navbar from './navbar';
import { MacBookScroll } from 'aceternity-ui';
import 'aceternity-ui/dist/index.css'; // Ensure the path is correct

class CloudsComponent extends Component {
  constructor(props) {
    super(props);
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
      cloudColor: 0xbcd7ff,
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
        <Navbar />
        <MacBookScroll>
          <h1>Welcome to My Project</h1>
          <p>This is a demo of the MacBookScroll effect using Aceternity UI.</p>
        </MacBookScroll>
      </div>
    );
  }
}

export default CloudsComponent;
