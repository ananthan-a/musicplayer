import React, { useState } from "react";
import LeftRow  from './LeftRow/LeftRow';
import Content from './Content/Content';
import SongPlayer   from './SongPlayer/SongPlayer'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Additional/Theme";

export default function App(props) {
    const [CurrentMusic, SetCurrentMusic] = useState("No Music");
    const [CurrentContent, SetCurrentContent] = useState("Videos");
    const [CurrentTheme, SetCurrentTheme] = useState("light");
    const MyTheme  = CurrentTheme === "dark" ? "dark" : "light";
    return (
    <ThemeProvider theme={MyTheme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        <LeftRow Theme={MyTheme} SetCurrentContent={SetCurrentContent}/>
        <Content Theme={MyTheme} SetCurrentMusic={SetCurrentMusic} CurrentContent={CurrentContent} SetCurrentTheme={SetCurrentTheme}/>
        <SongPlayer Theme={MyTheme} CurrentMusic={CurrentMusic} SetCurrentMusic={SetCurrentMusic}/>
    </ThemeProvider>
    );
}