import { Flex, Box, Link, Image, Text, Spacer } from "@chakra-ui/react";
import { ThemeButton } from "./ThemeButton";

export const Navbar = () => {
  return (
    <Flex
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      justifyContent="flex-end"
      alignItems="center"
      p="10px 60px"
    >
      <Box>
        <Flex>
          <Image
            boxSize="55"
            objectFit="cover"
            src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/2b50.svg"
          />
          <Flex flexDirection="column" justifyContent="center" ml="10px">
            <Text as="b" fontSize="xl">
              GitStar
            </Text>
            <Text color="gray">Most starred projects on Github</Text>
          </Flex>
        </Flex>
      </Box>
      <Spacer />
      <ThemeButton />
    </Flex>
  );
};
