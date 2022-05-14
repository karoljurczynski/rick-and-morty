import ButtonGroup from "../../molecules/ButtonGroup/ButtonGroup";
import InputGroup from "../../molecules/InputGroup/InputGroup";
import { Wrapper } from "./styles";


const Panel: React.FC = () => {
  return (
    <Wrapper>
      <InputGroup />
      <ButtonGroup />
    </Wrapper>
  );
}


export default Panel;