import {
  Box,
  Flex,
  Image,
  Link,
  Tag,
  Text,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineFork } from "react-icons/ai";
import { GoIssueOpened } from "react-icons/go";
import { StarIcon } from "@chakra-ui/icons";

export const RepoCard = ({ repo }) => {
  const bgColor = useColorModeValue("#e2e8f0", "#171923");
  const tagColor = useColorModeValue("#edf2f7", "#292b34");
  return (
    <Box
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
      mr="10px"
      p="20px 40px"
      bgColor={bgColor}
      borderRadius="12px"
    >
      <Flex flexDirection="column" maxW="230px">
        <Box mb="20px">
          <Flex>
            <Image
              src={repo?.owner?.avatar_url}
              borderRadius="full"
              boxSize="30px"
            />
            <Flex flexDirection="column" ml="10px">
              <Text>{repo?.owner?.login}</Text>
              <Text>
                <Link
                  isExternal
                  href={repo.owner.html_url}
                  _hover={{ textDecoration: "none" }}
                >
                  View Profile
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box mb="20px">
          <Flex flexDirection="column">
            <Text>
              <Link
                fontWeight="bold"
                textDecoration="underline"
                href={repo.html_url}
                isExternal
              >
                {repo.name}
              </Link>
            </Text>
            <Text color="gray">{`Built by ${repo?.owner?.login} on ${repo?.created_at}`}</Text>
          </Flex>
        </Box>
        <Box mb="20px">
          <Text noOfLines={2}>{repo.description}</Text>
        </Box>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Link
              isExternal
              _hover={{ textDecoration: "none" }}
              href={`https://github.com/${repo?.owner?.login}/${repo.name}/stargazers`}
            >
              <Tag variant="solid" bgColor={tagColor} color="black" size="md">
                <TagLeftIcon as={StarIcon} />
                <TagLabel>{repo.stargazers_count}</TagLabel>
              </Tag>
            </Link>
            <Link
              isExternal
              _hover={{ textDecoration: "none" }}
              href={`https://github.com/${repo?.owner?.login}/${repo.name}/forks`}
            >
              <Tag variant="solid" bgColor={tagColor} color="black" size="md">
                <TagLeftIcon as={AiOutlineFork} />
                <TagLabel>{repo.forks}</TagLabel>
              </Tag>
            </Link>
            <Link
              isExternal
              _hover={{ textDecoration: "none" }}
              href={`https://github.com/${repo?.owner?.login}/${repo.name}/issues`}
            >
              <Tag variant="solid" bgColor={tagColor} color="black" size="md">
                <TagLeftIcon as={GoIssueOpened} />
                <TagLabel>{repo?.open_issues}</TagLabel>
              </Tag>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
