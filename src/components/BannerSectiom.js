import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const BannerSectiom = () => {
  return (
    <Box
      mt={-200}
      w="full"
      h={{ base: "1189px", "3xl": "1600px" }}
      pos="relative"
      bgImage="url('https://res.cloudinary.com/dfsqwbmsa/image/upload/v1677564515/plants/wall-background_g87wzh.jpg')"
      bgSize="cover">
      <Stack h="full" pt={48} alignItems="center">
        <Heading
          fontSize={{ base: 35, md: 50, lg: 82 }}
          fontWeight={700}
          color="white"
          textAlign="center">
          Bring Serenity to Your Place <br />
          With Interior Plants
        </Heading>
        <Text
          mt={6}
          fontSize={{ base: 20, md: 24 }}
          color="white"
          textAlign="center">
          find your dream plant for you home decoration <br />
          with us, and we will make it happen.
        </Text>
        <Box pt={10}>
          <InputGroup
            p={2}
            border="1px solid #FFF"
            borderRadius={50}
            background="#FFFFFF33"
            size="lg"
            maxW={465}>
            <Input
              ml={5}
              variant="unstyled"
              placeholder="Enter your email"
              _placeholder={{ color: "white" }}
            />
            <InputRightElement width="145px" position="relative">
              <Button
                h="50px"
                w="50px"
                p="11px"
                borderRadius={50}
                bgGradient="linear(to-r, #2AF598, #009EFD)"
                _hover={{ background: "#2acdf5" }}
                color="white"
                fontWeight="normal"
                size="xl">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  width={20}
                  color="white"
                />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Stack>
      <Popover placement="top-start">
        <PopoverTrigger>
          <Box
            w={54}
            h={54}
            position="absolute"
            top={{ base: 660, "3xl": 890 }}
            left={{ base: 188, "3xl": 260 }}
            border="1px solid #FFF"
            borderRadius="full"
            bg="#FFFFFF29">
            <Box w={4} h={4} m="18px" borderRadius="full" bg="white" />
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody>Dracena Fragnas</PopoverBody>
        </PopoverContent>
      </Popover>
      <Box
        pos="absolute"
        bottom={0}
        w="full"
        h={200}
        bgGradient="linear(to-b, transparent, #FFF)"
      />
    </Box>
  );
};

export default BannerSectiom;
