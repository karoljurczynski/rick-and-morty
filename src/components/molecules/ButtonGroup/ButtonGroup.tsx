import { BUTTON_TYPE } from "../../../tools/constants";
import Button from "../../atoms/Button/Button";
import { Wrapper } from "./styles";


const ButtonGroup: React.FC = () => {
  const handleButton = () => {
    
  }
  return (
    <Wrapper>
      <Button buttonType={BUTTON_TYPE.CHANGE} buttonHandler={handleButton} />
      <Button buttonType={BUTTON_TYPE.REMOVE} buttonHandler={handleButton} />
    </Wrapper>
  );
}


export default ButtonGroup;