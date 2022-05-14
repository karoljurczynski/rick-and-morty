import styled from "styled-components";
import { Wrapper as Input } from "../../atoms/FilterInput/styles";


export const Wrapper = styled.div`
  display: flex;

  ${Input} { margin-left: 36px };
  ${Input}:first-of-type { margin-left: 0 };
  ${Input}:nth-of-type(2) { margin-left: 48px };
`;