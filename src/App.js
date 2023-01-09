import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from './Components/Header';
import Historical from './Components/Historical';
import OverAll from './Components/OverAll';
import Cluster from './Components/Cluster';

function App() {
  return (
    <Box bg='#011a2f'>
      <Header />
      <Flex maxWidth='100vw' gap={4} color={'white'} p='2.5vh 2vh' flexDir='column'>
        <Historical />
        <Box bg="#092d4a" p={{ base: '1rem', sm: '2rem' }} borderRadius={8}>
          <OverAll />
          <Cluster />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;