import styled from "styled-components";

import { stakenetTheme as theme } from "../../../../shell/theme/stakenetTheme";
import { FlexWrapper } from "../Wrappers/Wrapper";

export const ReceiveDetailsRow = styled(FlexWrapper)<{
  hasBottomBorder?: boolean;
  margin?: string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  align-items: center;
  border-bottom: ${(props) =>
    props.hasBottomBorder
      ? `1px solid ${theme.colors.blue["medium-darker"]}`
      : "none"};
`;
export const StyledReceiveDetailsParagraph = styled.p<{ isWhite?: boolean }>`
  font-size: ${theme.paragraph.sm};
  color: ${(props) =>
    props.isWhite ? theme.colors.white : theme.colors.gray.light};
  text-transform: capitalize;
  font-weight: ${theme.fontWeight.medium};
  margin: 0.8rem 0;
`;
