import { Box, Button, Flex, Select } from '@chakra-ui/react';
import React from 'react';
import Cluster1 from '../Charts/Cluster1Chart';
import Cluster2 from '../Charts/Cluster2Chart';

export default function Cluster() {
  return (<Box fontSize='18pt'>
    <Flex justifyContent='space-between' padding='1rem 0' alignItems='center'>
      <Box fontSize='18pt' fontWeight={777}>Cluster</Box>
      <Select width="auto" placeholder='Substation' style={{ border: '1px solid #fff4' }} size='lg' >
        <option value='option1' >Option 1</option>
        <option value='option2' >Option 2</option>
        <option value='option3' >Option 3</option>
      </Select>
    </Flex>
    <Flex gap='1rem'>
      <Box borderWidth={1} flex='1' borderRadius={8} borderColor='#21467a'>
        <Flex m='1.5rem' justifyContent='space-between' alignItems='center' marginBottom={0}>
          <Box fontSize='15pt'>Cluster 1</Box>
          <Button colorScheme='teal' size='lg'>View Detail</Button>
        </Flex>
        <Box><Cluster1 /></Box>
      </Box>
      <Box borderWidth={1} flex='1' borderRadius={8} borderColor='#21467a'>
        <Flex m='1.5rem' justifyContent='space-between' alignItems='center' marginBottom={0}>
          <Box fontSize='15pt'>Cluster 1</Box>
          <Button colorScheme='teal' size='lg'>View Detail</Button>
        </Flex>
        <Box><Cluster2 /></Box>
      </Box>
    </Flex>
  </Box>)
}