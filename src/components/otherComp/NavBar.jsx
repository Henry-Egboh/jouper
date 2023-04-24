import { Avatar, HStack, Heading, Spacer, Flex, Icon, UnorderedList, ListItem, ListIcon, Link } from "@chakra-ui/react";
import mine from "./henry.jpg";
import { FaBlender, FaCottonBureau } from "react-icons/fa";
import { NavLink as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <main>
      <Flex py={2} px={4} alignItems='center'>
        <HStack>
            <Icon as={FaCottonBureau} boxSize='2rem' />
          <Heading fontSize='1.5rem'>Jouper</Heading>
        </HStack>
        <Spacer />
        <HStack>
          <Avatar objectFit="cover" src={mine} boxSize="40px" />
          <UnorderedList pl='50px' listStyleType='none' display='flex' columnGap='3rem'>
            <ListItem>
                <ListIcon as={FaBlender} />
                    <Link as={RouterLink} to='/'>Services</Link>
            </ListItem>
            <ListItem>
                <ListIcon as={FaBlender} />
                    <Link as={RouterLink} to='/'>Products</Link>
            </ListItem>
            <ListItem>
                <ListIcon as={FaBlender} />
                    <Link as={RouterLink} to='/create'>Create</Link>
            </ListItem>
            <ListItem>
                <ListIcon as={FaBlender} />
                    <Link as={RouterLink} to='/profile'>Profile</Link>
            </ListItem>
          </UnorderedList>
        </HStack>
      </Flex>
    </main>
  );
};

export default NavBar;
