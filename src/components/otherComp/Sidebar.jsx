import { Box, Heading, Link, Stack } from "@chakra-ui/react";
import { List, ListItem, ListIcon, UnorderedList } from "@chakra-ui/react";
import { MdSettings, MdCheckCircle } from "react-icons/md";
import { FaCodiepie, FaBuffer, FaBahai, FaBacon, FaTwitter, FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { NavLink as RouterLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [pos, setPos] = useState(false);

  const sidePositionChange = () => {
    if (window.scrollY >= 16 && window.scrollY <= 100) {
          setPos(true);
    } else {
      setPos(false);
    }
  }

  window.addEventListener('scroll', sidePositionChange);

  const myhover = {
      '_hover': {
        color: "rgb(178, 73, 73)",
        borderBottom: "0px",
      }
  }


  return (
    <div>
      <Stack bg="gray.100" w='16rem' p={6} className={pos ? 'fixed-side' : null} >
        {/* useful links */}
        <Box pt={4}>
          <Heading mb={2} fontSize={16}>
            Useful Links
          </Heading>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={FaBuffer} />
              <Link as={RouterLink} to='/create' sx={myhover}>Services</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FaCodiepie} />
              <Link as={RouterLink} to='/create' sx={myhover}>Frequent Delivery</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FaBacon} />
              <Link as={RouterLink} to='/create' sx={myhover}>Contact</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FaBahai} />
              <Link as={RouterLink} to='/create' sx={myhover}>Markdown</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} />
             <Link as={RouterLink} to='/create' sx={myhover}>Create</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdSettings} />
              <Link as={RouterLink} to='/profile' sx={myhover}>Profile</Link>
            </ListItem>
          </List>
        </Box>
        {/* social media handles */}
        <Box py={8}>
          <Heading mb={2} fontSize={16}>
            Follow Us:
          </Heading>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={FaTwitter} />
              <Link as={RouterLink} to='https://www.twitter.com' sx={myhover}>Twitter</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FaFacebook} />
              <Link as={RouterLink} to='https://www.facebook.com' sx={myhover}>Facebook</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FaWhatsapp} />
              <Link as={RouterLink} to='/' sx={myhover}>Whatsapp</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FaLinkedin} />
              <Link as={RouterLink} to='/' sx={myhover}>LinkedIn</Link>
            </ListItem>
          </List>
        </Box>
        {/* Technologies */}
        <Box pb={8}>
          <Heading mb={2} fontSize={16}>
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
          <Heading mb={2} fontSize={16}>
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
