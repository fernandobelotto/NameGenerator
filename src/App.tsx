import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { useState } from "react";

export default function App() {
  function generateName() {
    setRandomName(faker.name.fullName());
  }
  const [randomName, setRandomName] = useState("");
  return (
    <Center h="100vh">
      <VStack>
        <Button onClick={generateName}>Generate Random Name</Button>
        <Heading>{randomName}</Heading>
      </VStack>
    </Center>
  );
}
