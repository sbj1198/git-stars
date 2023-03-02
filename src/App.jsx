import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
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

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilter({
      [name]: value,
    });
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
    if (!repos.length) {
      dispatch(getRepos());
    }
    if (Object.keys(filter).length !== 0) {
      filterRepos();
    }
  }, [filter]);

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
    </Box>
  );
}

export default App;

// {filterData.length !== 0
//   ? filterData.map((item) => {
//       return (
//         <GridItem key={item.id} pt="20px">
//           <RepoCard repo={item} />
//         </GridItem>
//       );
//     })
//   : filterData.length ===
//     0(
//       <Text mt="60px" as="b">
//         No matching Language found!
//       </Text>
//     ) ?  repos.map((repo) => {
//       return (
//         <GridItem key={repo.id} pt="20px">
//           <RepoCard repo={repo} />
//         </GridItem>
//       );
//     })}
