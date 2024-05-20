import { Heading, Center, Box, Image } from "@chakra-ui/react";


const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
        <Heading mb="6">BIENVENIDOS A KLOVERSTORE</Heading>
         <Box boxSize='sm'>
         <Image
      src='src\assets\Welcome.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
</Box>
        </Box>
      </Center>
    </div>
  );
};

export default Welcome