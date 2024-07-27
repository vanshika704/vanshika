import React from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class MyComponent extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      // other options if needed
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

    return <div ref={this.vantaRef} style={style} />;
  }
}

export default MyComponent;
