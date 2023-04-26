import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Wrap,
  Grid,
} from "@chakra-ui/react";
import CardAndImage from "./otherComp/CardAndImage";
import CardDivider from "./otherComp/CardDivider";
import GrayBorder from "./otherComp/GrayBorder";
import { FaBomb } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Container maxW="100%">
      {/* showcase menu */}
      <Container py={{base: '4rem', lg: '8rem'}} centerContent>
        <Wrap>
          <FaBomb
            className="show-case-icon"
            fill="teal"
            style={{
              borderRadius: "50%",
              border: "4px solid red",
              padding: "4px",
            }}
            size={50}
          />
        </Wrap>
        <wrap>
          <Heading className="show-case-heading" size="2xl" my="1rem">
            Dashing Out
          </Heading>
        </wrap>
        <Wrap>
        <Text className="show-case-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          praesentium neque error pariatur enim magnam maxime magni nesciunt
          vel, porro nobis similique temporibus amet, natus veniam dolor officia
          unde commodi.
        </Text>
        </Wrap>
      </Container>

      {/* CARD SECTION CONTENT */}
      <CardAndImage />
      {/* div with thick borders */}
      <GrayBorder />
      {/* CARD DIVIDER */}
      <CardDivider />

      {/* stack boxes */}
      <HCards />
      {/* another stack */}
      <VStack as="div" spacing="1rem" align="stretch" pb={8}>
        <Box bg="gray.100" p={8}>
          <Heading as="h4" my={2}>
            Sandwich Studies
          </Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur non laborum dolor culpa nobis doloribus.
          </Text>
        </Box>
        <Box bg="teal.500" p={8}>
          <Heading as="h4" my={2}>
            Sandwich Studies
          </Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur non laborum dolor culpa nobis doloribus.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

const HCards = () => {
  return ( 
    <>
      <Grid gap='1rem' templateColumns={{base: '1fr', sm: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)'}} py={24}>
        <Box boxShadow="2xl" rounded="md" bg="#fff" p={8}>
          <Heading mb={2} size={16}>
            Action Tips
          </Heading>
          <Text color="#f2f.80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            consectetur inventore voluptatum unde quibusdam dolores ex
            asperiores ipsam eius eveniet.
          </Text>
        </Box>

        <Box boxShadow="2xl" rounded="md" bg="#fff" p={8}>
          <Heading mb={2} size={16}>
            Action Tips
          </Heading>
          <Text color="#f2f.80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            consectetur inventore voluptatum unde quibusdam dolores ex
            asperiores ipsam eius eveniet.
          </Text>
        </Box>

        <Box boxShadow="2xl" rounded="md" bg="#fff" p={8}>
          <Heading mb={2} size={16}>
            Action Tips
          </Heading>
          <Text color="#f2f.80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            consectetur inventore voluptatum unde quibusdam dolores ex
            asperiores ipsam eius eveniet.
          </Text>
        </Box>

        <Box m='0px' boxShadow="2xl" rounded="md" bg="#fff" p={8}>
          <Heading mb={2} size={16}>
            Action Tips
          </Heading>
          <Text color="#f2f.80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            consectetur inventore voluptatum unde quibusdam dolores ex
            asperiores ipsam eius eveniet.
          </Text>
        </Box>
      </Grid>
    </>
   );
}
 

export default Dashboard;
