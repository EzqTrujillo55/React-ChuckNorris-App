import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import JokesPage from './Pages/JokesPage';
import { Container } from "@chakra-ui/react"
import './App.css';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
      <Box fontSize="xl">
        <Grid p={3}>
           <JokesPage/>
        </Grid>
      </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
