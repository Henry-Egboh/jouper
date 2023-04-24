import { Avatar, HStack, Heading, Spacer, Flex } from "@chakra-ui/react";
import mine from "./henry.jpg";

const NavBar = () => {
  return (
    <main>
      <Flex py={2} px={4} alignItems='center'>
        <HStack>
          <Heading>Jouper</Heading>
        </HStack>
        <Spacer />
        <HStack>
          <Avatar objectFit="cover" src={mine} boxSize="40px" />
        </HStack>
      </Flex>
    </main>
  );
};

export default NavBar;
