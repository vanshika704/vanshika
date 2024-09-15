import { Card, Image, Stack, Heading, Text, Button, ButtonGroup, Divider, CardBody, CardFooter, Box } from '@chakra-ui/react';

function Social() {
  return (
    <Box className='Social' display='flex' justifyContent='center' p={5}>
      <Box className='bg-gradient-to-bl from-blue-50 to-violet-50 p-4'>
        <Box className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-36 ml-10'>
          {/* Twitter Card */}
          <Card maxW='sm' backgroundColor='rgba(64, 64, 64, 0.8)'>
            <CardBody>
              <Image
                src='src/assets/twetter.avif'
                alt='Twitter'
                borderRadius='lg'
                height={100}
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md' color="white">Twitter</Heading>
                <Text color="white">
                  Username: Vanshika310819
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' onClick={() => window.open("https://twitter.com/Vanshika310819?t=9aIZ5qobM626GtHUScS_5Q&s=08", "_blank")}>
                  Explore
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          {/* LinkedIn Card */}
          <Card maxW='sm' backgroundColor='rgba(64, 64, 64, 0.8)'>
            <CardBody>
              <Image
                src='src/assets/linkedin-2.png'
                alt='LinkedIn'
                borderRadius='lg'
                height={100}
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md' color="white">LinkedIn</Heading>
                <Text color="white">
                  Username: Vanshika-sharma-b1387428a
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' onClick={() => window.open("https://www.linkedin.com/in/vanshika-sharma-b1387428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")}>
                  Connect
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          {/* Email Card */}
          <Card maxW='sm' backgroundColor='rgba(64, 64, 64, 0.8)'>
            <CardBody>
              <Image
                src='src/assets/gmail.webp'
                alt='Email'
                borderRadius='lg'
                height={100}
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md' color="white">Email</Heading>
                <Text color="white">
                  Email: vanshika310819@gmail.com
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' onClick={() => window.location.href = "https://mail.google.com/mail/u/0/#inbox"}>
                  Send Email
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          {/* GitHub Card */}
          <Card maxW='sm' backgroundColor='rgba(64, 64, 64, 0.8)'>
            <CardBody>
              <Image
                src='src/assets/png-clipart-github-logo-computer-icons-source-code-github-white-cat-like-mammal-removebg-preview.png' // Update this path with your GitHub image path
                alt='GitHub'
                borderRadius='lg'
                height={100}
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md' color="white">GitHub</Heading>
                <Text color="white">
                  Username: YourGitHubUsername
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' onClick={() => window.open("https://github.com/YourGitHubUsername", "_blank")}>
                  View Profile
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default Social;
