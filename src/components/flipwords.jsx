import { FlipWords } from "./flip-words";

export function FlipWordsDemo() {
  const words = ["React", "Flutter", "Firebase", "Node"];

  return (
    <div className="h-[40rem] flex absolute  sm:left-10 lg:left-0 items-center px-4">
      <div className="text-4xl sm:text-4xl sm:mt-32 sm:ml-36 md:text-6xl md:ml-20 md:mt-60 lg:text-6xl lg:mt-1 mx-auto font-normal text-neutral-700 dark:text-neutral-400 text-center">
        Hey Everyone !!!<br /> I am a
        <FlipWords words={words} /> <br />
        Developer
      </div>
    </div>
  );
}