import { Divider, Grid, List, ListItem, Link, GridItem, Heading, Text, Icon } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { FaCottonBureau } from 'react-icons/fa';

export default function Footer() {
  return (
   <footer>
    <Grid bg='#2e2a25' pb={8}>
      <Grid bg='white'p={8}>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} justifyContent='center' justifyItems='center' py={24} >
        <GridItem>
        <List>
          {/* 1st col */}
          <ListItem>
            <Link as={RouterLink} to='/'>Instant Receiver</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>Instant Receiver</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>Instant Receiver</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>Instant Receiver</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>Instant Receiver</Link>
          </ListItem>
        </List>
        </GridItem>
        {/* 2nd col */}
        <GridItem>
        <List>
          <ListItem>
            <Link as={RouterLink} to='/'>Sold Out Vices</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>Sold Out Vices</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>Sold Out Vices</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>Sold Out Vices</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>Sold Out Vices</Link>
          </ListItem>
        </List>
        </GridItem>
        {/* 3rd col */}
        <GridItem>
        <List>
          <ListItem>
            <Link as={RouterLink} to='/'>Customer Satisfaction</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>Customer Satisfaction</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>Customer Satisfaction</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>Customer Satisfaction</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>Customer Satisfaction</Link>
          </ListItem>
        </List>
        </GridItem>
        {/* 4th col */}
        <GridItem>
        <List>
          <ListItem>
            <Link as={RouterLink} to='/'>How We Serve You</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>How We Serve You</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>How We Serve You</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>How We Serve You</Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to='/'>How We Serve You</Link>
          </ListItem>
        </List>
        </GridItem>
      </Grid>
      <Divider border='1px groove gray.100' />
      <Grid py={8} justifyItems='center' rowGap={2}>
        <Icon as={FaCottonBureau} boxSize='2rem' />
        <Heading fontSize='1.5rem'>Jouper</Heading>
        <Text>Adipisicing elit. Repudiandae, asperiores!</Text>
      </Grid>
      </Grid>
      </Grid>
   </footer>
  )
}
