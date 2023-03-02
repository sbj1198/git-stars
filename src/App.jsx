import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getRepos } from "./redux/action";
import { RepoCard } from "./components/RepoCard";
import { ViewSelector } from "./components/ViewSelector";
import { Filter } from "./components/Filter";
function App() {
  const dispatch = useDispatch();
  const repos = useSelector((store) => store.repos);
  const [filter, setFilter] = useState({});
  const [filterData, setFilterData] = useState([]);
  const [view, setView] = useState("");
  const [current, setCurrent] = useState(1);
  const temp = useRef(current);
  const totalCount = 885828;

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilter({
      [name]: value,
    });
  };

  const paginationHandler = (val) => {
    setCurrent((prev) => prev + val);
  };

  const filterRepos = () => {
    let temp = repos.filter((repo) => repo.language === filter.language);
    setFilterData(temp);
  };

  const viewHandler = (val) => {
    setView(val);
  };

  const filterCondition = () => {
    if (filter.language === "" || Object.keys(filter).length === 0) {
      return repos.map((repo) => {
        return (
          <GridItem key={repo.id} pt="20px">
            <RepoCard repo={repo} />
          </GridItem>
        );
      });
    } else if (filter.language && filterData.length) {
      return filterData.map((item) => {
        return (
          <GridItem key={item.id} pt="20px">
            <RepoCard repo={item} />
          </GridItem>
        );
      });
    } else if (filter.language && !filterData.length) {
      return (
        <Text mt="60px" as="b">
          No matching Language found!
        </Text>
      );
    }
  };

  useEffect(() => {
    if (!repos.length || temp.current !== current) {
      temp.current = current;
      dispatch(getRepos(current));
    }
    if (Object.keys(filter).length !== 0) {
      filterRepos();
    }
  }, [filter, current]);

  return (
    <Box mb="20px">
      <Navbar />
      <Box mt="20px">
        <Flex justifyContent="center" alignItems="center">
          <Filter filter={filter} handleFilter={handleFilter} />
          <ViewSelector view={view} viewHandler={viewHandler} />
        </Flex>
      </Box>
      {view === "List" ? (
        <Flex
          flexDirection="column"
          mt="50px"
          justifyContent="center"
          p="10px 60px"
        >
          {repos.map((repo) => {
            return <RepoCard key={repo.id} repo={repo} />;
          })}
        </Flex>
      ) : (
        <Grid
          templateColumns="repeat(4, auto)"
          justifyContent="center"
          columnGap="10px"
          pb="20px"
        >
          {filterCondition()}
        </Grid>
      )}
      <Flex justifyContent="center" alignItems="center">
        <Button
          isDisabled={current === 1}
          variant="outline"
          mr="10px"
          colorScheme="cyan"
          onClick={() => paginationHandler(-1)}
        >
          Previous
        </Button>
        <Badge fontSize="xl" p="0 10px">
          {current}
        </Badge>
        <Button
          variant="outline"
          ml="10px"
          colorScheme="cyan"
          onClick={() => paginationHandler(+1)}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}

export default App;
