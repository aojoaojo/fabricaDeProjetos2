import React from "react";
import {
  Flex,
  Box,
  Center,
  Image,
  Text,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";

function App() {
  return (
    <Box h="100vh" bg="green.200">
      <Center
        as="header"
        h={150}
        bg="green.600"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        Cartão de Visita
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="green.200"
        h="calc(80vh - 200px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={100}
          p="10"
          boxShadow="0 1px 2px #ccc"
        >
          <Box display="flex" flexDir="column" alignItems="center" gap="4">
            <Image
              src="/Templates/unnamed.jpg"
              alt="Mike Wazowski"
              w="200px"
              h="250px"
              borderRadius="50%"
            />
            <Text fontSize="2xl" fontWeight="bold" color="green.800">
              Mike Wazowski
            </Text>
            <Button
              w={240}
              p="6"
              type="submit"
              bg="green.600"
              color="white"
              fontWeight="bold"
              fontSize="xl"
              mt="2"
              _hover={{ bg: "green.800" }}
            >
              Enviar
            </Button>
          </Box>
        </Center>
      </Flex>
      <Box h="10vh" bg="green.200">
        <Center
          as="div"
          h={100}
          bg="green.600"
          color="white"
          fontWeight="bold"
          fontSize="1xl"
          pb="0"
        >
          Criado por: João Vitor Brandão.
        </Center>
      </Box>
    </Box>
  );
}

export default App;

