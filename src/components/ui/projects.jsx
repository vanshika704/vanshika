"use client";

import { PinContainer } from "./3-dpin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer title="ForestHill" href="https://twitter.com/mannupaaji">
        <div className="relative flex items-center justify-center p-4 w-[15rem] h-[15rem] overflow-hidden">
          <img 
            src="src/assets/foresthill/Screenshot (73).png" 
            alt="Forest Hill" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
      </PinContainer>
    </div>
  );
}
