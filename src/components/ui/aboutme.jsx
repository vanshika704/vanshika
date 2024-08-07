// src/pages/AboutMe.js

import HTMLFlipBook from "react-pageflip";

function MyBook() {
  return (<div className="bookContainer">
    <HTMLFlipBook
      width={300}
      height={533}
      size="stretch"
      minWidth={315}
      maxWidth={300}
      minHeight={420}
      maxHeight={950}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={false}
    >
      <div className="demoPage">Hi, my name is Vanshika.</div>
      <div className="demoPage">I am a web developer.</div>
      <div className="demoPage">I love working with React.js.</div>
      <div className="demoPage">I enjoy creating interactive UIs.</div>
    </HTMLFlipBook></div>
  );
}

export default MyBook;
