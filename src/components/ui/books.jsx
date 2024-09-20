import HTMLFlipBook from "react-pageflip";
import { Grid, GridItem } from '@chakra-ui/react';

function MyBook() {
  return (
    <div className='Projectgrid'>
      <Grid
        h={{ base: 'auto', sm: '300px', md: '400px', lg: '500px' }}
        templateRows={{ base: 'repeat(5, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)' }}
        templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}
        gap={2}
        marginTop={{ base: '10px', sm: '20px', md: '30px', lg: '50px' }}
        marginX={{ base: '5px', sm: '10px', md: '20px', lg: '30px' }}
      >
        <GridItem 
          rowSpan={{ base: 1, sm: 2, md: 2 }} 
          colSpan={{ base: 2, sm: 3, md: 1 }} 
          bg='rgba(255, 255, 255, 0.5)'// Update the bgImage prop
          bgSize="cover" // Ensure the image covers the entire area
          bgPosition="center" // Center the background image
          bgRepeat="no-repeat"

          display="flex" 
          alignItems="center" 
          justifyContent="center"
          overflow="hidden"
        >
          <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={1150} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
            <div className="demoPage demopage1"> <img className="gridimage1" src="src/assets/whatsapp/Screenshot_2024-08-08-20-05-29-42_dd8350f2a4d58b9e26f0ed7fbe7df0d9.jpg"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
            <div className="demoPage demopage1"> <img className="gridimage1" src="src/assets/whatsapp/Screenshot_2024-08-08-20-05-44-46_dd8350f2a4d58b9e26f0ed7fbe7df0d9.jpg"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
            <div className="demoPage demopage1"> <img className="gridimage1" src="src/assets/whatsapp/Screenshot_2024-08-08-20-05-52-27_dd8350f2a4d58b9e26f0ed7fbe7df0d9.jpg"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
            <div className="demoPage demopage1"> <img className="gridimage1" src="src/assets/whatsapp/Screenshot_2024-08-08-20-05-59-14_dd8350f2a4d58b9e26f0ed7fbe7df0d9.jpg"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>

            </HTMLFlipBook>
          </div>
        </GridItem>
        <GridItem colSpan={{ base: 2, sm: 3, md: 2 }} bg='rgba(255, 255, 255, 0.5)' // Update the bgImage prop
  bgSize="cover" // Ensure the image covers the entire area
  bgPosition="center" // Center the background image
  bgRepeat="no-repeat"
        > <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
              <div className="demoPage demopage3">
              <img className="gridimage" src="src/assets/foresthill/Screenshot (73).png"   style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
              </div>
              <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/foresthill/Screenshot (74).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage2"> <img className="gridimage" src="src/assets/foresthill/Screenshot (75).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src="src/assets/foresthill/Screenshot (76).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src="src/assets/foresthill/Screenshot (77).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src="src/assets/foresthill/Screenshot (78).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src="src/assets/foresthill/Screenshot (79).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src="src/assets/foresthill/Screenshot (80).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src="src/assets/foresthill/Screenshot (81).png" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src="src/assets/foresthill/Screenshot (82).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src="src/assets/foresthill/Screenshot (83).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src="src/assets/foresthill/Screenshot (84).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src="src/assets/foresthill/Screenshot (85).png" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src="src/assets/foresthill/Screenshot (86).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage"  src="src/assets/foresthill/Screenshot (87).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
            </HTMLFlipBook>
          </div></GridItem>
          <GridItem colSpan={{ base: 2, sm: 3, md: 2 }}  bg='rgba(255, 255, 255, 0.5)' // Update the bgImage prop
          bgSize="cover" // Ensure the image covers the entire area
          bgPosition="center" // Center the background image
          bgRepeat="no-repeat"
          > <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
             <div className="demoPage ">
             <img className="gridimage" src = "src/assets/pratishtha/Screenshot (53).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
              </div>
             
              <div className="demoPage demopage1">   <img src = "src/assets/pratishtha/Screenshot (53).png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="gridimage"></img></div>
              <div className="demoPage demopage1">   <img src = "src/assets/pratishtha/Screenshot (54).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="gridimage"></img></div>
              <div className="demoPage demopage1">   <img src = "src/assets/pratishtha/Screenshot (55).png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="gridimage"></img></div>
              <div className="demoPage demopage1">   <img src = "src/assets/pratishtha/Screenshot (56).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="gridimage"></img></div>
              <div className="demoPage demopage1">   <img src = "src/assets/pratishtha/Screenshot (57).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="gridimage"></img></div>
              <div className="demoPage demopage1">   <img src = "src/assets/pratishtha/Screenshot (58).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="gridimage"></img></div>
            </HTMLFlipBook>
          </div></GridItem>
          <GridItem colSpan={{ base: 2, sm: 3, md: 2 }}  bg='rgba(255, 255, 255, 0.5)' // Update the bgImage prop
          bgSize="cover" // Ensure the image covers the entire area
          bgPosition="center" // Center the background image
          bgRepeat="no-repeat"
          > <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
           <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/gdscweather/Screenshot (88).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/gdscweather/Screenshot (89).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/gdscweather/Screenshot (90).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/gdscweather/Screenshot (91).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
            </HTMLFlipBook>
          </div></GridItem>
          <GridItem colSpan={{ base: 2, sm: 3, md: 2 }}  bg='rgba(255, 255, 255, 0.5)'  // Update the bgImage prop
  bgSize="cover" // Ensure the image covers the entire area
  bgPosition="center" // Center the background image
  bgRepeat="no-repeat"
          > <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
             <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/exponentially/Screenshot (59).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/exponentially/Screenshot (60).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/exponentially/Screenshot (61).png" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/exponentially/Screenshot (62).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/exponentially/Screenshot (63).png" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
            </HTMLFlipBook>
          </div></GridItem>
      </Grid>

      <Grid
        h={{ base: 'auto', sm: '300px', md: '400px', lg: '400px' }}
        templateRows={{ base: 'repeat(5, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)' }}
        templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)' }}
        gap={2}
        marginTop={{ base: '10px', sm: '20px', md: '30px', lg: '100px' }}
        marginX={{ base: '5px', sm: '10px', md: '20px', lg: '30px' }}
      >
        <GridItem 
          rowSpan={{ base: 1, sm: 2, md: 2 }} 
          colSpan={{ base: 2, sm: 3, md: 1 }} 
          bg='rgba(255, 255, 255, 0.5)'// Update the bgImage prop
          bgSize="cover" // Ensure the image covers the entire area
          bgPosition="center" // Center the background image
          bgRepeat="no-repeat"

          display="flex" 
          alignItems="center" 
          justifyContent="center"
          overflow="hidden"
        > <div style={{ width: '100%', height: '100%' }}><div className="demoPage demopage1"> <img className="gridimage1" src="src/assets/all/Screenshot_2024-08-08-20-15-06-51_000775a16687df9cd9dc66211acfb8da.jpg" height="400px"></img></div>
       
      </div></GridItem>
        <GridItem colSpan={{ base: 2, sm: 3, md: 2 }}  bg='rgba(255, 255, 255, 0.5)'
       
         backgroundSize="cover"
         backgroundPosition="center"  // Update the bgImage prop
  bgSize="cover" // Ensure the image covers the entire area
  bgPosition="center" // Center the background image
  bgRepeat="no-repeat"
 ><div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
              <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/social media/Screenshot (65).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/social media/Screenshot (66).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/social media/Screenshot (67).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/social media/Screenshot (68).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/social media/Screenshot (69).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/social media/Screenshot (69).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
           
            </HTMLFlipBook>
          </div></GridItem>
        <GridItem colSpan={{ base: 2, sm: 3, md: 2 }}  bg='rgba(255, 255, 255, 0.5)'   
  backgroundSize="cover"
  backgroundPosition="center" // Update the bgImage prop
  bgSize="cover" // Ensure the image covers the entire area
  bgPosition="center" // Center the background image
  bgRepeat="no-repeat"
 ><div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
               <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/todo/Screenshot (72).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
               <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/todo/Screenshot (71).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              
            </HTMLFlipBook>
          </div></GridItem>
          <GridItem colSpan={{ base: 2, sm: 3, md: 2 }} bg='rgba(255, 255, 255, 0.5)' // Update the bgImage prop
  bgSize="cover" // Ensure the image covers the entire area
  bgPosition="center" // Center the background image
  bgRepeat="no-repeat"
        > <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
              <div className="demoPage demopage3">
              <img className="gridimage" src="src/assets/Youtube/Screenshot (232).png"   style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
              </div>
              <div className="demoPage demopage1"> <img className="gridimage" src="src/assets/Youtube/Screenshot (233).png"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             
              
            </HTMLFlipBook>
          </div></GridItem>
        <GridItem colSpan={{ base: 2, sm: 3, md: 2 }} bg='rgba(255, 255, 255, 0.5)'  
  backgroundSize="cover"
  backgroundPosition="center" // Update the bgImage prop

 ><div style={{ width: '100%', height: '100%' }}>
           
             {/* <div><img src = "src/assets/connection.gif" className="gridimage2"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div> */}
            
          </div></GridItem>
      </Grid>
    </div>
  );
}

export default MyBook;