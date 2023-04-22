import { Box, Heading, Stack } from "@chakra-ui/react";
import { List, ListItem, ListIcon, UnorderedList } from "@chakra-ui/react";
import { MdSettings, MdCheckCircle } from "react-icons/md";
import { FaCodiepie, FaBuffer } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div>
      <Stack bg="#e2e3e4" p={6} minH="100vh">
        {/* useful links */}
        <Box>
        <Heading mb={2} as="h4" fontSize={20} color=" #232323">
            Useful Links
          </Heading>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={FaBuffer} color="green.500" />
              Services
            </ListItem>
            <ListItem>
              <ListIcon as={FaCodiepie} color="green.500" />
              Frequwnt Delivery
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
             Create
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={MdSettings} color="green.500" />
             Profile
            </ListItem>
          </List>
        </Box>
        
          {/* Q & A */}
        <Box py={8}>
          <Heading mb={2} as="h4" fontSize={20} color=" #232323">
            Q & A
          </Heading>
          <UnorderedList spacing={4}>
            <ListItem>Can it be that design?</ListItem>
            <ListItem>How do I get here</ListItem>
            <ListItem>Best practices for Chakra UI?</ListItem>
            <ListItem>Do I need to learn frameworks?</ListItem>
            <ListItem>Chakra UI vs Bootstrap?</ListItem>
          </UnorderedList>
        </Box>
      </Stack>
    </div>
  );
}
