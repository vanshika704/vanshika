"use client";

import { CardBody, CardContainer, CardItem } from "./3-Dcard.jsx";

export function ThreeDCardDemo() {
  const techImages = [
    { src: 'src/assets/react.png', alt: 'React' },
    { src: 'src/assets/Bootstrap_logo.svg.png', alt: 'Bootstrap' },
    { src: 'src/assets/chakra1.jpg', alt: 'Chakra UI' },
    { src: 'src/assets/flutter.svg', alt: 'Flutter' },
    { src: 'src/assets/firebase.png', alt: 'Firebase' },
    { src: 'src/assets/C_Logo.png', alt: 'C' },
    { src: 'src/assets/c++.png', alt: 'C++' },
    { src: 'src/assets/python.jpeg', alt: 'Python' },
    { src: 'src/assets/html.png', alt: 'HTML' },
    { src: 'src/assets/css.svg', alt: 'CSS' },
    { src: 'src/assets/javascript.png', alt: 'JavaScript' },
    { src: 'src/assets/java.webp', alt: 'Java' },
    { src: 'src/assets/tailwind.png', alt: 'tailwind' },
    { src: 'src/assets/figma.png', alt: 'figma' },
    { src: 'src/assets/canva.jpg', alt: 'canva' },
  ];

  return (
    <div className="card1">
      <CardContainer className="inter-var">
        <CardBody className="bg-white relative group/card dark:bg-black dark:border-white/20 border-black/10 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem>
            <div className="font-bold text-6xl mb-4">TECH STACK</div>
          </CardItem>
          <CardItem>
            <div className="grid grid-cols-3 gap-12">
              {techImages.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-transparent border border-gray-300 p-2"
                >
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    className="w-20 h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
