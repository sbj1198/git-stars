import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRepos } from "./redux/action";
import { RepoCard } from "./components/RepoCard";
import { ViewSelector } from "./components/ViewSelector";
function App() {
  const dispatch = useDispatch();
  const repos = useSelector((store) => store.repos);

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  return (
    <Box>
      <Navbar />
      <Box>
        <Flex>
          <ViewSelector />
        </Flex>
      </Box>
      <Flex flexWrap="wrap" mt="50px" justifyContent="center">
        {repos.map((repo) => {
          return <RepoCard key={repo.id} repo={repo} />;
        })}
      </Flex>
    </Box>
  );
}

export default App;
