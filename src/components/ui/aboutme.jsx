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
          bg='tomato' 
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
              <div className="demoPage demopage3">
                <div>Vanshika <br />Projects</div>
              </div>
              <div className="demoPage demopage1">I am a web developer.</div>
              <div className="demoPage demopage2">I love working with React.js.</div>
              <div className="demoPage demopage4">I enjoy creating interactive UIs.</div>
            </HTMLFlipBook>
          </div>
        </GridItem>
        <GridItem colSpan={{ base: 2, sm: 3, md: 2 }} bg='papayawhip'> <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
              <div className="demoPage demopage3">
                <div>Vanshika <br />Projects</div>
              </div>
              <div className="demoPage demopage1">I am a web developer.</div>
              <div className="demoPage demopage2">I love working with React.js.</div>
              <div className="demoPage demopage4">I enjoy creating interactive UIs.</div>
            </HTMLFlipBook>
          </div></GridItem>
          <GridItem colSpan={{ base: 2, sm: 3, md: 2 }} bg='papayawhip'> <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
              <div className="demoPage demopage3">
                <div>Vanshika <br />Projects</div>
              </div>
              <div className="demoPage demopage1">I am a web developer.</div>
              <div className="demoPage demopage2">I love working with React.js.</div>
              <div className="demoPage demopage4">I enjoy creating interactive UIs.</div>
            </HTMLFlipBook>
          </div></GridItem>
          <GridItem colSpan={{ base: 2, sm: 3, md: 2 }} bg='papayawhip'> <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
              <div className="demoPage demopage3">
                <div>Vanshika <br />Projects</div>
              </div>
              <div className="demoPage demopage1">I am a web developer.</div>
              <div className="demoPage demopage2">I love working with React.js.</div>
              <div className="demoPage demopage4">I enjoy creating interactive UIs.</div>
            </HTMLFlipBook>
          </div></GridItem>
          <GridItem colSpan={{ base: 2, sm: 3, md: 2 }} bg='papayawhip'> <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
              <div className="demoPage demopage3">
                <div>Vanshika <br />Projects</div>
              </div>
              <div className="demoPage demopage1">I am a web developer.</div>
              <div className="demoPage demopage2">I love working with React.js.</div>
              <div className="demoPage demopage4">I enjoy creating interactive UIs.</div>
            </HTMLFlipBook>
          </div></GridItem>
      </Grid>

      <Grid
        h={{ base: 'auto', sm: '300px', md: '400px', lg: '500px' }}
        templateRows={{ base: 'repeat(5, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)' }}
        templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)' }}
        gap={2}
        marginTop={{ base: '10px', sm: '20px', md: '30px', lg: '50px' }}
        marginX={{ base: '5px', sm: '10px', md: '20px', lg: '30px' }}
      >
        <GridItem 
          rowSpan={{ base: 1, sm: 2, md: 2 }} 
          colSpan={{ base: 2, sm: 3, md: 1 }} 
          bg='tomato' 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
          overflow="hidden"
        />
        <GridItem colSpan={{ base: 2, sm: 3, md: 2 }} bg='papayawhip' />
        <GridItem colSpan={{ base: 2, sm: 3, md: 2 }} bg='papayawhip' />
        <GridItem colSpan={{ base: 2, sm: 3, md: 2 }} bg='tomato' />
        <GridItem colSpan={{ base: 2, sm: 3, md: 2 }} bg='papayawhip' />
      </Grid>
    </div>
  );
}

export default MyBook;
