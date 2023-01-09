import { Box } from "@chakra-ui/react";
import Cluster0 from "../Charts/Cluster0Chart";

export default function OverAll() {
  return (
    <Box fontSize='18pt'>
      <Box fontWeight='777'>Overall</Box>
      <Box fontWeight='222' fontSize='13pt' color='#ccc'>Last updated at 12:30 PM</Box>
      <Box paddingLeft={{ md: '3rem', base: '1rem' }}><Cluster0 /></Box>
    </Box>
  )
}