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
} from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { AiOutlineFork } from "react-icons/ai";
import { GoIssueOpened } from "react-icons/go";
import { StarIcon } from "@chakra-ui/icons";

export const RepoCard = ({ repo }) => {
  return (
    <Box
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
      mr="10px"
      p="20px 40px"
      bgColor="#e2e8f0"
      borderRadius="12px"
    >
      <Flex flexDirection="column" maxW="300px">
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
                <Link as={RouteLink} _hover={{ textDecoration: "none" }}>
                  View Profile
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box mb="20px">
          <Flex flexDirection="column">
            <Text>
              <Link as={RouteLink} fontWeight="bold" textDecoration="underline">
                {repo.name}
              </Link>
            </Text>
            <Text color="gray">{`Built by ${repo?.owner?.login} on ${repo?.created_at}`}</Text>
          </Flex>
        </Box>
        <Box mb="20px">
          <Text>{repo.description}</Text>
        </Box>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Link _hover={{ textDecoration: "none" }}>
              <Tag variant="solid" bgColor="#f4f9ff" color="black" size="lg">
                <TagLeftIcon as={StarIcon} />
                <TagLabel>{repo.stargazers_count}</TagLabel>
              </Tag>
            </Link>
            <Link _hover={{ textDecoration: "none" }}>
              <Tag variant="solid" bgColor="#f4f9ff" color="black" size="lg">
                <TagLeftIcon as={AiOutlineFork} />
                <TagLabel>{repo.forks}</TagLabel>
              </Tag>
            </Link>
            <Link _hover={{ textDecoration: "none" }}>
              <Tag variant="solid" bgColor="#f4f9ff" color="black" size="lg">
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
