import {
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  Stack,
  Button,
  Box,
} from "@chakra-ui/react";

const CardAndImage = () => {
  return (
    <main>
      <Card
        direction={{ base: "column", lg: "row" }}
        overflow="hidden"
        variant="outline"
        ps={{base: '1rem', md: '0rem'}}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", }}
          src="https://picsum.photos/id/4/600/400"
          alt="study"
        />

        <Stack>
          <CardBody>
            <Heading size="md">Growth in Technology</Heading>
            <Box py={4}>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Adipisci molestias velit sapiente debitis tempora doloribus 
                est dolorum rerum cum corrupti? Iste ipsa amet nostrum.
            </Text>
            <Button mt={4} bg='#671134' color='#ffc' _hover={{ color: "", bg: "#671278", transform: "translate(2)", transition: "all 1s ease-in-out" }}>
              Read More ...
            </Button>
            </Box>
          </CardBody>
        </Stack>
      </Card>
    </main>
  );
};

export default CardAndImage;
