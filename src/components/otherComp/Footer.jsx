import {
  Divider,
  Grid,
  List,
  ListItem,
  Link,
  GridItem,
  Heading,
  Text,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaCottonBureau } from "react-icons/fa";
import { MdBeenhere, MdSchema } from "react-icons/md";


export default function Footer() {
  const myhover = {
    fontWeight: 400,
    '_hover': {
      color: "rgb(178, 73, 73)",
      borderBottom: "0px",
    }
}

const h4 = {
  color: "teal.500",
  fontSize: "1rem"
}

  return (
    <footer>
      <Grid bg="#2e2a25" pb={8}>
        <Grid bg="white" p={8}>
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={6}
            justifyContent="center"
            justifyItems="center"
            py={24}
          >
            <GridItem>
              <Heading pb='0.8rem' sx={h4} fontSize="1rem">Contact Us</Heading>
              <List spacing={2}>
                {/* 1st col */}
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Instant Receiver
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Instant Receiver
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Instant Receiver
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Instant Receiver
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Instant Receiver
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Instant Receiver
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Instant Receiver
                  </Link>
                </ListItem>
              </List>
            </GridItem>
            {/* 2nd col */}
            <GridItem>
              <Heading pb='0.8rem' sx={h4} fontSize="1rem">Contact Us</Heading>
              <List spacing={2}>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Sold Out Vices
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Sold Out Vices
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Sold Out Vices
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Sold Out Vices
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Sold Out Vices
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Sold Out Vices
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Sold Out Vices
                  </Link>
                </ListItem>
              </List>
            </GridItem>
            {/* 3rd col */}
            <GridItem>
              <Heading pb='0.8rem' sx={h4} fontSize="1rem">Contact Us</Heading>
              <List spacing={2}>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Customer Satisfaction
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Customer Satisfaction
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Customer Satisfaction
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Customer Satisfaction
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={RouterLink} to="/">
                    Customer Satisfaction
                  </Link>
                </ListItem>
              </List>
            </GridItem>
            {/* 4th col */}
            <GridItem>
              <Heading pb='0.8rem' sx={h4} fontSize="1rem">Contact Us</Heading>
             <Stack>
              <Icon as={MdBeenhere}></Icon>
             <Heading fontSize='1rem' fontWeight='400'>Customers</Heading>
             <Text>Lorem ipsum dolor sit amet consectetur.</Text>
             </Stack>
             <Divider my={4} />
             <Stack>
              <Icon as={MdSchema}></Icon>
             <Heading fontSize='1rem' fontWeight='400'>Customers</Heading>
             <Text>Lorem ipsum dolor sit amet consectetur.</Text>
             </Stack>
            </GridItem>
          </Grid>
          <Divider border="1px groove gray.100" />
          <Grid py={8} justifyItems="center" rowGap={2}>
            <Icon as={FaCottonBureau} boxSize="2rem" />
            <Heading fontSize="1.5rem" fontWeight='600'>
            <Link as={ RouterLink } to='/' sx={myhover}>Jouper</Link>
            </Heading>
            <Text>Adipisicing elit. Repudiandae, asperiores!</Text>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
