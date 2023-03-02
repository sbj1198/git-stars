import { Box, Flex, Tag, Text, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { FaRegListAlt } from "react-icons/fa";
import { RxViewGrid } from "react-icons/rx";
import React from "react";

export const ViewSelector = () => {
  return (
    <Box>
      <Flex border="1px solid white">
        <Box>
          <Tag variant="solid" size="lg">
            <TagLeftIcon as={FaRegListAlt} />
            <TagLabel>List</TagLabel>
          </Tag>
        </Box>
        <Box>
          <Tag variant="solid" size="lg">
            <TagLeftIcon as={RxViewGrid} />
            <TagLabel>Grid</TagLabel>
          </Tag>
        </Box>
      </Flex>
    </Box>
  );
};
