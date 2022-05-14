import Heading from "../atoms/Heading/Heading";
import Pagination from "../organisms/Pagination/Pagination";
import Panel from "../organisms/Panel/Panel";
import Table from "../organisms/Table/Table";
import { Wrapper } from "./styles";

const App: React.FC = () => {
  return (
    <Wrapper>
      <Heading>Characters</Heading>
      <Panel />
      <Table />
      <Pagination />
    </Wrapper>
  )
}


export default App;