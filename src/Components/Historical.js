import { Box } from "@chakra-ui/react";
import HistoricalHighChart from "../Charts/HistoricalHighChart";
import { overAll } from '../data/overAllData';

export default function Historical() {
  return (
    <Box bg="#092d4a" p='2.5vh 2vh' borderRadius={8}>
      <Box fontSize='18pt' fontWeight={777}>Historical</Box>
      <Box><HistoricalHighChart data={overAll} /></Box>
    </Box>
  )
}