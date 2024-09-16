"use client";

import { PinContainer } from "./3-dpin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer title="Project1" href="https://twitter.com/mannupaaji">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
           <img src="src/assets/foresthill\Screenshot (73).png" ></img>
        </div>
      </PinContainer>
    </div>
    
  );
}
