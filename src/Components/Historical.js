import { Box, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverAllChart from "../Charts/OverAllChart";

export default function Historical() {
  return (
    <Box bg="#092d4a" p='2.5vh 2vh' borderRadius={8}>
      <Box fontSize='18pt' fontWeight={777}>Historical</Box>
      <Box><OverAllChart /></Box>
      <Flex fontSize='13pt' gap={7} alignItems='center' justifyContent='center' p={6} mt={4}>
        <Flex alignItems='center' gap={1} fontSize='14pt'><FontAwesomeIcon fontSize='8pt' color='#a999e5' icon='circle' />RepRate [N/s]</Flex>
        <Flex alignItems='center' gap={1} fontSize='14pt'><FontAwesomeIcon fontSize='8pt' color='#00dec2' icon='circle' />Qmax [Volt]</Flex>
        <Flex alignItems='center' gap={1} fontSize='14pt'><FontAwesomeIcon fontSize='8pt' color='#f04248' icon='circle' />Alarm Severity [Scalar]</Flex>
      </Flex>
    </Box>
  )
}