import styled, { css } from "styled-components";
import { stakenetTheme as theme } from "../../../../shell/theme/stakenetTheme";
import { hex2rgba } from "../../../../helpers/styleHelper";
import { devicesUp, sizes } from "../../../../media";
import { ContainerProps } from "./Container";

export const defaultContainerPadding = css`
  padding-left: 2rem;
  padding-right: 2rem;

  @media only screen and ${devicesUp.md} {
    padding-left: 8rem;
    padding-right: 8rem;
  }
`;

export const StyledContainer = styled.div<ContainerProps>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  margin-left: auto;
  margin-right: auto;
  ${(props) =>
    props.noGutter
      ? css`
          padding: 0;
        `
      : defaultContainerPadding};
`;

export const StyledContainerLG = styled(StyledContainer)`
  max-width: ${sizes.lg}px;
`;
export const StyledContainerXL = styled(StyledContainer)`
  max-width: ${sizes.xl}px;
`;

export const StyledContainer2XL = styled(StyledContainer)`
  max-width: ${sizes["2xl"]}px;
`;

export const StyledContainer3XL = styled(StyledContainer)`
  max-width: ${sizes["3xl"]}px;
`;

export const StyledContainerCard = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${(props) =>
    props.maxWidth ? props.maxWidth : theme.maxWidth.full};
  background-color: ${(props) =>
    props.bg ? props.bg : hex2rgba(theme.colors.blue.darker, 0.6)};
  border-width: ${(props) => (props.border ? props.border : 0)};
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : "transparent"};
  border-style: solid;
  padding: ${(props) =>
    props.padding
      ? props.padding
      : `${theme.margin.xl} ${theme.margin.default} `};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : theme.borderRadius.xl};
  box-shadow: ${(props) =>
    props.boxShadow ? props.boxShadow : theme.boxShadow.sm};

  &:hover {
    ${(props) =>
      props.hasHoverEffect &&
      css`
        box-shadow: ${theme.boxShadow.md};
        transition: box-shadow 0.3s ease-in-out;
      `}
  }
  @media only screen and ${devicesUp.sm} {
    padding: ${(props) =>
      props.padding ? props.padding : `${theme.margin.xl}`};
  }
`;
