import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import CardAndImage from "./otherComp/CardAndImage";

const Dashboard = () => {
  return (
    <Container maxW="100%">
      {/* showcase menu */}
      <Container py={32} centerContent>
        <Heading size="2xl" my="1rem">
          Dashing Out
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          praesentium neque error pariatur enim magnam maxime magni nesciunt
          vel, porro nobis similique temporibus amet, natus veniam dolor officia
          unde commodi.
        </Text>
      </Container>

        {/* CARD SECTION CONTENT */}
        <CardAndImage />
      {/* div with thick borders */}
      <Flex
        p={12}
        border={8}
        borderColor="gray.100"
        borderWidth={32}
        borderStyle="solid"
        // bg="#ecdccd"
        borderRadius={8}
        columnGap={8}
      >
        <Box>
          <Heading size="1rem">Vecron</Heading>
          <Text color="#f2f.80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            consectetur inventore voluptatum unde quibusdam dolores ex
            asperiores ipsam eius eveniet.
          </Text>
        </Box>
        <Box>
          <Heading size="1rem">Vecron</Heading>
          <Text color="#f2f.80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            consectetur inventore voluptatum unde quibusdam dolores ex
            asperiores ipsam eius eveniet.
          </Text>
        </Box>
      </Flex>

      {/* stack boxes */}
      <HStack as="div" spacing={6} py={24}>
        <Box boxShadow="2xl" rounded="md" bg="#fff" p={8}>
          <Text color="#f2f.80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            consectetur inventore voluptatum unde quibusdam dolores ex
            asperiores ipsam eius eveniet.
          </Text>
        </Box>
        <Box boxShadow="2xl" rounded="md" bg="#fff" p={8}>
          <Text color="#f2f.80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            consectetur inventore voluptatum unde quibusdam dolores ex
            asperiores ipsam eius eveniet.
          </Text>
        </Box>
        <Box boxShadow="2xl" rounded="md" bg="#fff" p={8}>
          <Text color="#f2f.80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            consectetur inventore voluptatum unde quibusdam dolores ex
            asperiores ipsam eius eveniet.
          </Text>
        </Box>
        <Box boxShadow="2xl" rounded="md" bg="#fff" p={8}>
          <Text color="#f2f.80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            consectetur inventore voluptatum unde quibusdam dolores ex
            asperiores ipsam eius eveniet.
          </Text>
        </Box>
      </HStack>

      {/* another stack */}
      <VStack as="div" spacing="1rem" align="stretch" pb={8}>
        <Box bg="#898989" p={8}>
          <Heading as="h4" my={2}>
            Sandwich Studies
          </Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur non laborum dolor culpa nobis doloribus.
          </Text>
        </Box>
        <Box bg="#671134" p={8}>
          <Heading as="h4" my={2}>
            Sandwich Studies
          </Heading>
          <Text color="#ffc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur non laborum dolor culpa nobis doloribus.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Dashboard;
