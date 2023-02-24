import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Center bgGradient="linear(to-r, #566270, #283444)">
      <Container maxW="container.2xl" pt={32}>
        <Stack>
          <Grid
            templateColumns={{ md: "repeat(4, 1fr)", lg: "repeat(8, 1fr)" }}
            gap={10}
            mb={14}>
            <GridItem colSpan={{ base: 2, md: 3 }} maxW="463px">
              <Box>
                <Text fontSize="48px" fontWeight="medium" color="white" py={5}>
                  Newsletter
                </Text>
                <InputGroup
                  p={2}
                  border="1px solid #FFF"
                  borderRadius={50}
                  background="#FFFFFF33"
                  size="lg">
                  <Input
                    ml={5}
                    variant="unstyled"
                    placeholder="Enter your email"
                    _placeholder={{ color: "white" }}
                  />
                  <InputRightElement width="145px" position="relative">
                    <Button
                      h="47px"
                      w="145px"
                      borderRadius={50}
                      bgGradient="linear(to-r, #2AF598, #009EFD)"
                      color="white"
                      fontWeight="normal"
                      size="xl">
                      Subscribe
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </GridItem>
            <GridItem>
              <Heading variant="footer">Support</Heading>
              <Text variant="footer">About Us</Text>
              <Text variant="footer">Careers</Text>
              <Text variant="footer">Blog</Text>
            </GridItem>
            <GridItem>
              <Heading variant="footer">Useful Link</Heading>
              <Text variant="footer">Payment & Tax</Text>
              <Text variant="footer">Team of service</Text>
              <Text variant="footer">Privacy Policy</Text>
            </GridItem>
            <GridItem>
              <Heading variant="footer">Our Menu</Heading>
              <Text variant="footer">Best Product</Text>
              <Text variant="footer">Category</Text>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 2 }}>
              <Heading variant="footer">Address</Heading>
              <Text variant="footer">
                JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia
              </Text>
              <Text variant="footer">info@plants.mail</Text>
            </GridItem>
          </Grid>
          <Box borderTop="1px solid #FFF">
            <Text
              mt={53}
              mb={120}
              color="white"
              textAlign="center"
              fontSize="3xl">
              © 2023 davixq - All rights reserved.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Center>
  );
};

export default Footer;
