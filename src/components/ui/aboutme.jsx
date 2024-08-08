// src/components/ui/aboutme.js
// import HTMLFlipBook from "react-pageflip";
 // Make sure to import the CSS file for styling
 import { Grid, GridItem } from '@chakra-ui/react'



 function MyBook() {
   return (
     <div className='Projectgrid'>
      <Grid
  h='400px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
  marginTop={150}
  marginLeft={200}
  marginRight={200}
>
  <GridItem rowSpan={2} colSpan={1} bg='tomato' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='tomato' />
  <GridItem colSpan={2} bg='papayawhip' />
</Grid>


<Grid
  h='400px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
  marginTop={150}
  marginLeft={200}
  marginRight={200}
>
  <GridItem rowSpan={2} colSpan={1} bg='tomato' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='tomato' />
  <GridItem colSpan={2} bg='papayawhip' />
</Grid>
     </div>
   );
 }
 
 export default MyBook;
 


  {/* <div className="bookContainer"> */}
      {/* <HTMLFlipBook
        width={400} // Increased width
        height={250} // Increased height
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
    </div> */}



