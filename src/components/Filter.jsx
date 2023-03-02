import { Box, Select } from "@chakra-ui/react";
import React from "react";
import lang from "../utils/lang";
import { useSelector } from "react-redux";

export const Filter = () => {
  const [filter, setFilter] = useState({});
  const repos = useSelector((store) => store.repos);
  return (
    <Box mr="10px" minW="300px" maxW="300px">
      <Select placeholder="All Languages">
        {lang.map((item) => {
          return <option value={item.value}>{item.label}</option>;
        })}
      </Select>
    </Box>
  );
};
