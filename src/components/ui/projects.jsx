"use client";

import { PinContainer } from "./3-dpin";

export function AnimatedPinDemo() {
  return (<><div className="flex"><div className="h-[40rem] w-full flex items-center justify-center">
    <PinContainer title="ForestHill" href="https://twitter.com/mannupaaji">
      <div className="relative flex  p-1 w-[15rem] h-[15rem] overflow-hidden">
        <img 
          src="src/assets/foresthill/Screenshot (73).png" 
          alt="Forest Hill" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>
    </PinContainer>
  </div>
  <div className="h-[40rem] w-full flex items-center justify-center">
    <PinContainer title="ForestHill" href="https://twitter.com/mannupaaji">
      <div className="relative flex  p-1 w-[15rem] h-[15rem] overflow-hidden">
        <img 
          src="src/assets/foresthill/Screenshot (73).png" 
          alt="Forest Hill" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>
    </PinContainer>
  </div>
  <div className="h-[40rem] w-full flex items-center justify-center">
    <PinContainer title="ForestHill" href="https://twitter.com/mannupaaji">
      <div className="relative flex  p-1 w-[15rem] h-[15rem] overflow-hidden">
        <img 
          src="src/assets/foresthill/Screenshot (73).png" 
          alt="Forest Hill" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>
    </PinContainer>
  </div>
 
  </div>
 <div><div className="h-[40rem] w-full flex items-center justify-center">
   <PinContainer title="ForestHill" href="https://twitter.com/mannupaaji">
     <div className="relative flex  p-1 w-[15rem] h-[15rem] overflow-hidden">
       <img 
         src="src/assets/foresthill/Screenshot (73).png" 
         alt="Forest Hill" 
         className="absolute inset-0 w-full h-full object-cover" 
       />
     </div>
   </PinContainer>
 </div></div>  
  </>
    
    
  );
}
