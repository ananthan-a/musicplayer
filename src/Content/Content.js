import React from 'react';
import styled from "styled-components";
import './Style/Content.css';

import FeaturedMusicComponent from './Components/FeaturedMusic';
import FeaturedVideoComponent from './Components/FeaturedVideo';
import PopularArtistsComponent from './Components/PopularArtists';
import SearchMenuComponent from './Components/SearchMenu';
import {HomePageRight} from './Style/ContentStyled';

export default function Content (props){

    console.log("$ Content");
    console.log("Width : ",props.ScreenWidth);
    
    const [SearchTerm, SetSearchTerm] = React.useState("");
    
    function SetCurrentContent(){
        if(props.CurrentContent === "Videos"){
            return(<FeaturedVideoComponent SearchTerm={SearchTerm} ScreenWidth={props.ScreenWidth}/>);
        }
        else if(props.CurrentContent === "Music"){
            return(<FeaturedMusicComponent SetCurrentMusic={props.SetCurrentMusic} SearchTerm={SearchTerm} ScreenWidth={props.ScreenWidth}/>);
        }
        else{
            return(<div>Not finished</div>);
        }
    }

    return(
        <HomePageRight>
            <div className="TopMenu"><SearchMenuComponent SetCurrentTheme={props.SetCurrentTheme} Theme={props.Theme} SetSearchTerm={SetSearchTerm}/></div>
            <div className="FeaturedVideos"><SetCurrentContent/></div>
            <div className="PopularArtists"><PopularArtistsComponent ScreenWidth={props.ScreenWidth}/></div>
        </HomePageRight>
    );
}

