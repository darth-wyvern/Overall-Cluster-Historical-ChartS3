import { Box } from "@chakra-ui/react";
import OverAllHighChart from "../Charts/OverAllHighChart";
import { cluster1, cluster2 } from '../data/clusterData';

export default function OverAll() {
  const data = [cluster1, cluster2];
  console.log(data)

  return (
    <Box fontSize='18pt'>
      <Box fontWeight='777'>Overall</Box>
      <Box fontWeight='222' fontSize='13pt' color='#ccc'>Last updated at 12:30 PM</Box>
      <Box><OverAllHighChart data={data} /></Box>
    </Box>
  )
}