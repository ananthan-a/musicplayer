import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  RightSide: "#F7F8FA",
  LeftSide: "#EFF0F5",
  TextColor: "#121B25",
  Footer: "#F9FAFC",
  RightShadow: "0px 0px 60px rgba(62, 85, 103, 0.1)",
  FooterShadow: "0px 0px 60px rgba(62, 85, 103, 0.1);"
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  RightSide: "#0E121A",
  LeftSide: "#181C25",
  TextColor: "#ffffff",
  Footer: "#202530",
  RightShadow: "0px 0px 60px rgba(0, 0, 0, 0.2)",
  FooterShadow: "0px 0px 60px rgba(0, 0, 0, 0.2)"
};

export const GlobalStyles = createGlobalStyle`
    body {
		background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
	}
`;