import {
  Card,
  CardBody,
  Heading,
  Text,
  Stack,
  CardHeader,
  StackDivider,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

const CardDivider = () => {
    const h4 = {
        color: "teal.500",
        fontSize: "1rem"
    }

  return (
    <main>
        {/* col 1 */}
      <SimpleGrid templateColumns='repeat(2, 1fr)' spacing={4}>
        <Card>
          <CardHeader>
            <Heading size="md">Categories</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading sx={h4} size="xs" textTransform="uppercase">
                  Management
                </Heading>
                <Text pt="2" fontSize="sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, accusamus.
                </Text>
              </Box>
              <Box>
                <Heading sx={h4} size="xs" textTransform="uppercase">
                  Topical Issues
                </Heading>
                <Text pt="2" fontSize="sm">
                  Lorem ipsum dolor sit amet consectetur.
                </Text>
              </Box>
              <Box>
                <Heading sx={h4} size="xs" textTransform="uppercase">
                  Payment Option
                </Heading>
                <Text pt="2" fontSize="sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa alias quasi eum!
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        {/* col 2 */}
        <Card>
          <CardHeader>
            <Heading size="md">Assets on Codes</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading sx={h4} size="xs" textTransform="uppercase">
                  Verification
                </Heading>
                <Text pt="2" fontSize="sm">
                  Companies with good working cycle.
                </Text>
              </Box>
              <Box>
                <Heading sx={h4} size="xs" textTransform="uppercase">
                  System Architecture
                </Heading>
                <Text pt="2" fontSize="sm">
                  The overall system can be measurable if delivered.
                </Text>
              </Box>
              <Box>
                <Heading sx={h4} size="xs" textTransform="uppercase">
                  Analysis
                </Heading>
                <Text pt="2" fontSize="sm">
                  Frameworks can benefit speed in development.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </main>
  );
};

export default CardDivider;
