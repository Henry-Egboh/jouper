import { Box, Container, Heading, Flex, Text, VStack, HStack } from "@chakra-ui/react";

const Dashboard = () => {
    return ( 
        <Container maxW='90%'>
            <Heading as='h3' size='lg' my='1rem'>
                Dashing Out
            </Heading>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, 
                praesentium neque error pariatur enim magnam maxime magni nesciunt vel, 
                porro nobis similique temporibus amet, natus veniam dolor officia unde commodi.
            </Text>
            <Flex columnGap={4}>
                <Box boxShadow='2xl' rounded='md' bg='#ecdccd' p={8} border='16px' borderColor='gray.600' borderWidth={24} borderStyle='groove'>
                    <Text color='#f2f.80'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Molestias consectetur inventore voluptatum unde quibusdam dolores ex asperiores ipsam eius eveniet.
                    </Text>
                </Box>
                <Box boxShadow='2xl' rounded='md' bg='#ecdccd' p={8} border='16px' borderColor='gray.600' borderWidth={24} borderStyle='groove'>
                    <Text color='#f2f.80'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Molestias consectetur inventore voluptatum unde quibusdam dolores ex asperiores ipsam eius eveniet.
                    </Text>
                </Box>
                <Box boxShadow='2xl' rounded='md' bg='#ecdccd' p={8} border='16px' borderColor='gray.600' borderWidth={24} borderStyle='groove'>
                    <Text color='#f2f.80'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Molestias consectetur inventore voluptatum unde quibusdam dolores ex asperiores ipsam eius eveniet.
                    </Text>
                </Box>
                <Box boxShadow='2xl' rounded='md' bg='#ecdccd' p={8} border='16px' borderColor='gray.600' borderWidth={24} borderStyle='groove'>
                    <Text color='#f2f.80'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Molestias consectetur inventore voluptatum unde quibusdam dolores ex asperiores ipsam eius eveniet.
                    </Text>
                </Box>
            </Flex>
            <Box p={12} border={8} borderColor='blue' bg='#e12e2e' borderWidth={32} borderStyle='solid' borderRadius={8} my={4}>

            </Box>

            {/* stack boxes */}
            <HStack spacing={6} py={8}>
                <Box boxShadow='2xl' rounded='md' bg='#fff' p={8}>
                    <Text color='#f2f.80'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Molestias consectetur inventore voluptatum unde quibusdam dolores ex asperiores ipsam eius eveniet.
                    </Text>
                </Box>
                <Box boxShadow='2xl' rounded='md' bg='#fff' p={8}>
                    <Text color='#f2f.80'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Molestias consectetur inventore voluptatum unde quibusdam dolores ex asperiores ipsam eius eveniet.
                    </Text>
                </Box>
                <Box boxShadow='2xl' rounded='md' bg='#fff' p={8}>
                    <Text color='#f2f.80'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Molestias consectetur inventore voluptatum unde quibusdam dolores ex asperiores ipsam eius eveniet.
                    </Text>
                </Box>
                <Box boxShadow='2xl' rounded='md' bg='#fff' p={8}>
                    <Text color='#f2f.80'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Molestias consectetur inventore voluptatum unde quibusdam dolores ex asperiores ipsam eius eveniet.
                    </Text>
                </Box>
            </HStack>

            {/* another stack */}
            <VStack spacing='1rem' align='stretch' pb={8}>
                <Box bg='#898989' p={8}>
                    <Heading as='h4' my={2}>Sandwich Studies</Heading>
                    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non laborum dolor culpa nobis doloribus.</Text>
                </Box>
                <Box bg='#671134' p={8}>
                    <Heading as='h4' my={2}>Sandwich Studies</Heading>
                    <Text color='#ffc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non laborum dolor culpa nobis doloribus.</Text>
                </Box>
                <Box bg='#671134' p={8}>
                    <Heading as='h4' my={2}>Sandwich Studies</Heading>
                    <Text color='#ffc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non laborum dolor culpa nobis doloribus.</Text>
                </Box>
            </VStack>
        </Container>
     );
}
 
export default Dashboard;