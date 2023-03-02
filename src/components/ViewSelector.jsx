import { Box, Flex, Tag, Text, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { FaRegListAlt } from "react-icons/fa";
import { RxViewGrid } from "react-icons/rx";
import React from "react";

export const ViewSelector = ({ view, viewHandler }) => {
  return (
    <Box>
      <Flex border="1px solid black">
        <Box _hover={{ cursor: "pointer" }}>
          <Tag
            onClick={() => viewHandler("List")}
            variant="solid"
            size="lg"
            borderRadius="none"
            borderRight="1px solid black"
          >
            <TagLeftIcon as={FaRegListAlt} />
            <TagLabel>List</TagLabel>
          </Tag>
        </Box>
        <Box _hover={{ cursor: "pointer" }}>
          <Tag
            onClick={() => viewHandler("Grid")}
            variant="solid"
            size="lg"
            borderRadius="none"
          >
            <TagLeftIcon as={RxViewGrid} />
            <TagLabel>Grid</TagLabel>
          </Tag>
        </Box>
      </Flex>
    </Box>
  );
};
