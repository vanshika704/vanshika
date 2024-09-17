import { FlipWords } from "./flip-words";
import { useNavigate } from 'react-router-dom';

export function FlipWordsDemo() {
  const words = ["React", "Flutter", "Firebase", "Node"];
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/about');
  };

  return (
    <div className="h-[40rem] flex absolute sm:left-10 lg:left-0 items-center px-4">
      <div className="text-4xl sm:text-4xl sm:mt-32 sm:ml-36 md:text-6xl md:ml-20 md:mt-60 lg:text-6xl lg:mt-1 mx-auto font-normal text-neutral-700 dark:text-neutral-400 text-center">
        Hey Everyone !!!<br /> I am a
        <FlipWords words={words} /> <br />
        Developer

        {/* Placing the buttons directly below the text */}
        <div className="flex justify-center mt-8 space-x-4">
          <button type="button" className="btn btn-dark resume">Resume</button>
          <button type="button" className="btn btn-dark resume" onClick={handleExploreClick}>Explore</button>
        </div>
      </div>

      <img src="src/assets/pixel-art-12601_256.gif" height={50} alt="gif" className="ml-4" />
    </div>
  );
}
