import {
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";

const CardAndImage = () => {
  return (
    <main>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
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
            <Text py="2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Adipisci molestias velit sapiente debitis tempora doloribus 
                est dolorum rerum cum corrupti? Iste ipsa amet nostrum.
            </Text>
            <Button bg='#671134' color='#ffc' _hover={{ color: "", bg: "#671278", transform: "translate(2)", transition: "all 1s ease-in-out" }}>
              Read More ...
            </Button>
          </CardBody>
        </Stack>
      </Card>
    </main>
  );
};

export default CardAndImage;
