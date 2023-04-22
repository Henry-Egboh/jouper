import { Box, Heading, Stack } from "@chakra-ui/react";
import { List, ListItem, ListIcon, UnorderedList } from "@chakra-ui/react";
import { MdSettings, MdCheckCircle } from "react-icons/md";
import { FaCodiepie, FaBuffer, FaBahai, FaBacon, FaTwitter, FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div>
      <Stack bg="#e2e3e4" p={6} minH="100vh">
        {/* useful links */}
        <Box pt={4}>
          <Heading mb={2} as="h4" fontSize={20} color=" #671134">
            Useful Links
          </Heading>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={FaBuffer} />
              Services
            </ListItem>
            <ListItem>
              <ListIcon as={FaCodiepie} />
              Frequent Delivery
            </ListItem>
            <ListItem>
              <ListIcon as={FaBacon} />
              Contact
            </ListItem>
            <ListItem>
              <ListIcon as={FaBahai} />
              Markdown
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} />
              Create
            </ListItem>
            <ListItem>
              <ListIcon as={MdSettings} />
              Profile
            </ListItem>
          </List>
        </Box>
        {/* social media handles */}
        <Box py={8}>
          <Heading mb={2} as="h4" fontSize={20} color=" #671134">
            Follow Us:
          </Heading>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={FaTwitter} />
              Twitter
            </ListItem>
            <ListItem>
              <ListIcon as={FaFacebook} />
              Facebook
            </ListItem>
            <ListItem>
              <ListIcon as={FaWhatsapp} />
              Whatsapp
            </ListItem>
            <ListItem>
              <ListIcon as={FaLinkedin} />
              LinkedIn
            </ListItem>
          </List>
        </Box>
        {/* Technologies */}
        <Box pb={8}>
          <Heading mb={2} as="h4" fontSize={20} color=" #671134">
            Tech Space
          </Heading>
          <UnorderedList spacing={4} listStyleType="none" ml={0}>
            <ListItem>Arduino Algo</ListItem>
            <ListItem>Django Framework</ListItem>
            <ListItem>Web Dev</ListItem>
            <ListItem>Cross Cutting</ListItem>
            <ListItem>Chakra UI</ListItem>
          </UnorderedList>
        </Box>

        {/* READ more */}
        <Box pb={8}>
          <Heading mb={2} as="h4" fontSize={20} color=" #671134">
            Read Also
          </Heading>
          <UnorderedList spacing={4} listStyleType="none" ml={0}>
            <ListItem>Calibration</ListItem>
            <ListItem>Itemization</ListItem>
            <ListItem>Solve Problems</ListItem>
            <ListItem>New Frameworks</ListItem>
            <ListItem>Investigative Argument</ListItem>
          </UnorderedList>
        </Box>

        {/* Q & A */}
        <Box pb={8}>
          <Heading mb={2} as="h4" fontSize={20} color="#671134">
            Q & A
          </Heading>
          <UnorderedList spacing={4} listStyleType="none" ml={0}>
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
