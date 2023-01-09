import { Box, Flex, Input, Select, Avatar } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <Box bg="#092d4a" >
      <Flex justifyContent='flex-end' alignItems='center' fontSize={{ base: '24pt' }} gap={5} color='#fff' padding='2.5vh 2vh' style={{ borderBottom: '1px solid #fff2' }} >
        <FontAwesomeIcon icon={"bell"} />
        <FontAwesomeIcon icon={"gear"} />
        <Avatar src='https://www.storynory.com/wp-content/uploads/2022/09/ungoldenfish-videoart.jpg' />
      </Flex>
      <Flex justifyContent='space-between' alignItems='center' padding='2.5vh 2vh' fontSize='18pt' style={{ borderBottom: '1px solid #fff2' }}>
        <Select width="auto" bg='#0000' color='#fff' style={{ border: '1px solid #fff2' }} >
          <option style={{ backgroundColor: '#000', color: '#fff' }} value='option1'>Option 1</option>
          <option style={{ backgroundColor: '#000', color: '#fff' }} value='option2'>Option 2</option>
          <option style={{ backgroundColor: '#000', color: '#fff' }} value='option3'>Option 3</option>
        </Select>
        <Input type="date" width="auto" placeholder="Basic usage" color='#fff' style={{ border: '1px solid #fff2' }} />
      </Flex>
    </Box>
  )
}