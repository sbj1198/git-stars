import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
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
  const [view, setView] = useState("");

  const viewHandler = (val) => {
    setView(val);
  };

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  return (
    <Box mb="20px">
      <Navbar />
      <Box mt="20px">
        <Flex justifyContent="center" alignItems="center">
          <Filter />
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
          {repos.map((repo) => {
            return (
              <GridItem key={repo.id} pt="20px">
                <RepoCard repo={repo} />
              </GridItem>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}

export default App;
