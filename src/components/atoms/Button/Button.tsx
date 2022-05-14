import { Icon, Text, Wrapper } from "./styles";
import { BUTTON_TYPE } from "../../../tools/constants";
import ChangeIcon from '../../../images/change_status.svg';
import RemoveIcon from '../../../images/trashcan.svg';


const Button: React.FC<ButtonProps> = ({ buttonType, buttonHandler }) => {
  return (
    <Wrapper buttonType={buttonType} onClick={buttonHandler}>
      <Icon src={buttonType === BUTTON_TYPE.CHANGE ? ChangeIcon : RemoveIcon} />
      <Text>{ buttonType }</Text>
    </Wrapper>
  )
}


export default Button;