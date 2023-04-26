import { Box, Heading, Flex, Text } from "@chakra-ui/react";

export default function GrayBorder() {
  return (
    <section>
      <Flex
        p={12}
        border={8}
        borderColor="gray.100"
        borderWidth={32}
        borderStyle="solid"
        // bg="#ecdccd"
        borderRadius={8}
        gap={8}
        wrap={{base: 'wrap', lg: 'nowrap' }}
        
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
    </section>
  );
}
