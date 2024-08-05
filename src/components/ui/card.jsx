"use client";

import { CardBody, CardContainer, CardItem } from "./3-Dcard.jsx";
import { Grid, GridItem, Image } from '@chakra-ui/react';

export function ThreeDCardDemo() {
  const techImages = [
    { src: 'src/assets/react.svg', alt: 'React' },
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
    { src: 'src/assets/java.webp', alt: 'Java' }
  ];

  return (
    <div className="card1">
      <CardContainer className="inter-var">
        <CardBody className="bg-white relative group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
         <CardItem><div className="poppins-bold text1">TECH STACK</div></CardItem>
          <CardItem>
            <Grid
              h='auto'
              templateRows='repeat(4, 1fr)'
              templateColumns='repeat(3, 1fr)'
              gap={4}
            >
              {techImages.map((tech, index) => (
                <GridItem 
                  key={index} 
                  colSpan={1} 
                  bg='transparent' 
                  display='flex' 
                  alignItems='center' 
                  justifyContent='center'
                  border='1px solid #ccc' // Optional: Adds a border to see the grid layout
                >
                  <Image src={tech.src} alt={tech.alt} boxSize='100px' objectFit='cover' />
                </GridItem>
              ))}
            </Grid>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
