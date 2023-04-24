import { Avatar, HStack, Heading, Spacer, Flex, Icon, UnorderedList, ListItem, ListIcon, Link, Stack, Text } from "@chakra-ui/react";
import mine from "./henry.jpg";
import { FaCottonBureau } from "react-icons/fa";
import { NavLink as RouterLink } from "react-router-dom";
import { MdMediation, MdPermDataSetting, MdUnfoldMore, MdSpaceDashboard, MdArrowCircleRight } from "react-icons/md";
import { useState } from "react";

const NavBar = () => {
    const [fixNav, setFixNav] = useState(false);

    function fixNavBar() {
        if (window.scrollY >= 16) {
            setFixNav(true)
        } else {
            setFixNav(false);
        }
    }
    window.addEventListener('scroll', fixNavBar);


    const myhover = {
        fontWeight: 400,
        '_hover': {
          color: "rgb(178, 73, 73)",
          borderBottom: "0px",
        }
    }
  
  return (
    <main>
    <Stack direction='row' p={2} bg='#2e2a25' alignItems='center' justifyContent='center'>
        <Icon as={MdArrowCircleRight} fill='teal.500' />
        <Text color='teal.500'>Get caught up while you sleep ...</Text>
    </Stack>
      <Flex className={fixNav ? 'sticky' : null} py={2} px={4} alignItems='center'>
        <HStack>
            <Icon as={FaCottonBureau} boxSize='2rem' />
          <Heading fontSize='1.5rem'>
            <Link as={ RouterLink } to='/' sx={myhover}>Jouper</Link>
          </Heading>
        </HStack>
        <Spacer />
        <HStack>
          <Avatar objectFit="cover" src={mine} boxSize="40px" />
          <UnorderedList pl='50px' listStyleType='none' display='flex' columnGap='3rem'>
            <ListItem>
                <ListIcon fill="teal.500" as={MdPermDataSetting} />
                    <Link as={RouterLink} to='/' sx={myhover}>Services</Link>
            </ListItem>
            <ListItem>
                <ListIcon fill="teal.500" as={MdMediation} />
                    <Link as={RouterLink} to='/' sx={myhover}>Products</Link>
            </ListItem>
            <ListItem>
                <ListIcon fill="teal.500" as={MdUnfoldMore} />
                    <Link as={RouterLink} to='/create' sx={myhover}>Create</Link>
            </ListItem>
            <ListItem>
                <ListIcon fill="teal.500" as={MdSpaceDashboard} />
                    <Link as={RouterLink} to='/profile' sx={myhover}>Profile</Link>
            </ListItem>
          </UnorderedList>
        </HStack>
      </Flex>
    </main>
  );
};

export default NavBar;
