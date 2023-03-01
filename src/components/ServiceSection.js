import { Box, Center, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import { serviceItems } from "@/constants";

const ServiceSection = () => {
  return (
    <Center>
      <Container maxW="container.2xl" my={24}>
        <Stack direction="row" justifyContent="space-between">
          {serviceItems.map((item) => (
            <Stack key={item.id} direction="row">
              <Image src={item.img} alt={item.title} width={84} height={84} />
              <Box pl={6}>
                <Heading fontSize={32} fontWeight={500} color="#081323">
                  {item.title}
                </Heading>
                <Text fontSize={20} fontWeight={500} color="#828282">
                  {item.desc}
                </Text>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Center>
  );
};

export default ServiceSection;
