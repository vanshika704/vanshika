// src/components/ui/aboutme.js
import HTMLFlipBook from "react-pageflip";
 // Make sure to import the CSS file for styling

function MyBook() {
  return (
    <div className="bookContainer">
      <HTMLFlipBook
        width={400} // Increased width
        height={550} // Increased height
        size="stretch"
        minWidth={400}
        maxWidth={400}
        minHeight={550}
        maxHeight={550}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={false}
      >
        <div className="demoPage demopage3"><div className="demopage1">Vanshika <br></br>Projects</div></div>
        <div className="demoPage demopage1">I am a web developer.</div>
        <div className="demoPage demopage1">I love working with React.js.</div>
        <div className="demoPage demopage1">I enjoy creating interactive UIs.</div>
      </HTMLFlipBook>
    </div>
  );
}

export default MyBook;
