import { DefaultTheme } from "styled-components";

export interface IStakenetTheme extends DefaultTheme {
  colors: {
    blue: {
      darkest: string;
      darker: string;
      dark: string;
      medium: string;
      light: string;
      lighter: string;
      lightest: string;
      "medium-dark": string;
    };
    white: string;
    black: string;
    gray: {
      darker: string;
      dark: string;
      "medium-dark": string;
    };
  };

  heading: {
    xxl: string;
    xl: string;
    lg: string;
    md: string;
    sm: string;
    xs: string;
  };

  paragraph: {
    xl: string;
    lg: string;
    md: string;
    sm: string;
    xs: string;
  };

  margin: {
    lg: string;
    md: string;
    sm: string;
    none: string;
  };

  fontWeight: {
    bold: number;
    semibold: number;
    medium: number;
    normal: number;
    light: number;
  };

  borderRadius: {
    lg: string;
    md: string;
    sm: string;
    xs: string;
  };

  maxWidth: {
    full: string;
    "7xl": string;
    "6xl": string;
    "5xl": string;
    "4xl": string;
    "3xl": string;
    "2xl": string;
    xl: string;
    lg: string;
    md: string;
    sm: string;
    xs: string;
  };
}

export const stakenetTheme: IStakenetTheme = {
  colors: {
    blue: {
      darkest: "#0D1328",
      darker: "#192038",
      dark: "#0D132830",
      "medium-dark": "#3F476D",
      medium: "#1254DD",
      light: "#1356DE",
      lighter: "#7377A5",
      lightest: "#1D96EC",
    },
    white: "#FFFFFF",
    black: "#000000",
    gray: {
      darker: "#7377A514",
      dark: "#7377A529",
      "medium-dark": "#7377A53D",
    },
  },

  heading: {
    xxl: "5.8rem",
    xl: "4.8rem",
    lg: "3.8rem",
    md: "2.8rem",
    sm: "2.4rem",
    xs: "1.9rem",
  },

  paragraph: {
    xl: "2rem",
    lg: "1.8rem",
    md: "1.6rem",
    sm: "1.4rem",
    xs: "1.3rem",
  },

  margin: {
    lg: "3.2rem",
    md: "1.2rem",
    sm: ".6rem",
    none: "0rem",
  },

  fontWeight: {
    bold: 700,
    semibold: 600,
    medium: 500,
    normal: 400,
    light: 300,
  },

  borderRadius: {
    lg: ".8rem",
    md: ".6rem",
    sm: ".4rem",
    xs: ".2rem",
  },

  maxWidth: {
    full: "100%",
    "7xl": "80rem",
    "6xl": "72rem",
    "5xl": "64rem",
    "4xl": "56rem",
    "3xl": "48rem",
    "2xl": "42rem",
    xl: "36rem",
    lg: "32rem",
    md: "28rem",
    sm: "24rem",
    xs: "20rem",
  },
};
