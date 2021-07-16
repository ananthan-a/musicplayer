import React from 'react';
import styled from "styled-components";
import './Style/Content.css';

import FeaturedMusicComponent from './Components/FeaturedMusic';
import FeaturedVideoComponent from './Components/FeaturedVideo';
import PopularArtistsComponent from './Components/PopularArtists';
import SearchMenuComponent from './Components/SearchMenu';

const HomePageRight = styled.div`
    background-color: ${(props) => props.theme.RightSide};
    position: absolute;
    left: 20.83%;
    right: -0.07%;
    top: 0%;
    bottom: 11.56%;
    box-shadow: ${(props) => props.theme.RightShadow};
`;

export default function Content (props){
    function SetCurrentContent(){
        if(props.CurrentContent === "Videos"){
            return(<FeaturedVideoComponent/>);
        }
        else{
            return(<FeaturedMusicComponent SetCurrentMusic={props.SetCurrentMusic}/>);
        }
    }

    return(
        <HomePageRight>
            <div className="TopMenu"><SearchMenuComponent SetCurrentTheme={props.SetCurrentTheme} Theme={props.Theme}/></div>
            <div className="FeaturedVideos"><SetCurrentContent/></div>
            <div className="PopularArtists"><PopularArtistsComponent/></div>
        </HomePageRight>
    );
}

