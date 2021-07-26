import React, { useEffect, useState } from "react";
import LeftRow  from './LeftRow/LeftRow';
import Content from './Content/Content';
import SongPlayer   from './SongPlayer/SongPlayer'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Additional/Theme";

function UseWindowSize(){
    const [ScreenSize, SetScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            SetScreenSize(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
    },[]);
    return ScreenSize;
}

export default function App(props) {

    console.log("$ AppComponent");
    const width = UseWindowSize();
    const [CurrentMusic, SetCurrentMusic] = useState("No Music");
    const [CurrentContent, SetCurrentContent] = useState("Music");
    const [CurrentTheme, SetCurrentTheme] = useState("light");
    const MyTheme  = CurrentTheme === "dark" ? "dark" : "light";
    return (
    <ThemeProvider theme={MyTheme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        <LeftRow
            Theme={MyTheme}
            CurrentContent={CurrentContent}
            SetCurrentContent={SetCurrentContent}
            ScreenWidth={width}
        />
        <Content
            Theme={MyTheme}
            SetCurrentMusic={SetCurrentMusic}
            CurrentContent={CurrentContent}
            SetCurrentTheme={SetCurrentTheme}
            ScreenWidth={width}
        />
        <SongPlayer
            Theme={MyTheme}
            CurrentMusic={CurrentMusic}
            SetCurrentMusic={SetCurrentMusic}
            ScreenWidth={width}
        />
    </ThemeProvider>
    );
}


