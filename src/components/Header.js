import { Box, Center, Container, Spacer, Stack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Center zIndex={10} pos="relative">
      <Container maxW="container.2xl" py={14}>
        <Stack direction="row">
          <Spacer />
          <Stack direction="row" spacing={16}>
            <Link href="/">
              <Text variant="header">Home</Text>
            </Link>
            <Link href="/">
              <Text variant="header">Shop</Text>
            </Link>
            <Link href="/">
              <Text variant="header">About Us</Text>
            </Link>
            <Link href="/">
              <Text variant="header">Contact</Text>
            </Link>
          </Stack>
          <Spacer />
          <Box>
            <FontAwesomeIcon icon={faBagShopping} width={36} color="white" />
          </Box>
        </Stack>
      </Container>
    </Center>
  );
};

export default Header;
