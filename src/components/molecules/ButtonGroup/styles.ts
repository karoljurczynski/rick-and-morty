import styled from "styled-components";
import { Wrapper as Button } from "../../atoms/Button/styles";


export const Wrapper = styled.div`
  display: flex;
  ${Button}:last-of-type { margin-left: 24px };
`;