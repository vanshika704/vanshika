// src/components/ui/aboutme.js
import HTMLFlipBook from "react-pageflip";
 // Make sure to import the CSS file for styling

function MyBook() {
  return (
    <div className="bookContainer">
      <HTMLFlipBook
        width={300} // Increased width
        height={500} // Increased height
        size="stretch"
        minWidth={300}
        maxWidth={300}
        minHeight={500}
        maxHeight={500}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={false}
      >
        <div className="demoPage">Hi, my name is Vanshika.</div>
        <div className="demoPage">I am a web developer.</div>
        <div className="demoPage">I love working with React.js.</div>
        <div className="demoPage">I enjoy creating interactive UIs.</div>
      </HTMLFlipBook>
    </div>
  );
}

export default MyBook;
