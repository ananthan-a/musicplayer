import React from 'react';
import DiscoverIconDark from './Sources/Icon/DiscoverIconDark.png';
import FavouritiesIconDark from './Sources/Icon/FavouritiesIconDark.png';
import MessageIconDark from './Sources/Icon/MessageIconDark.png';
import PlaylistsIconDark from './Sources/Icon/PlaylistsIconDark.png';
import PodcastsIconDark from './Sources/Icon/PodcastsIconDark.png';
import TopListsIconDark from './Sources/Icon/TopListsIconDark.png';
import VideoIconDark from './Sources/Icon/VideoIconDark.png';
import DiscoverIconLight from './Sources/Icon/DiscoverIconLight.png';
import FavouritiesIconLight from './Sources/Icon/FavouritiesIconLight.png';
import MessageIconLight from './Sources/Icon/MessageIconLight.png';
import PlaylistsIconLight from './Sources/Icon/PlaylistsIconLight.png';
import PodcastsIconLight from './Sources/Icon/PodcastsIconLight.png';
import TopListsIconLight from './Sources/Icon/TopListsIconLight.png';
import VideoIconLight from './Sources/Icon/VideoIconLight.png';
import AddIconLight from './Sources/Icon/AddIconLight.png';
import AddIconDark from './Sources/Icon/AddIconDark.png';
import Logo from './Sources/Icon/Logo.jpg'
import './Style/LeftRow.css';
import styled from 'styled-components';

const Left = styled.div`
    background-color:  ${(props) => props.theme.LeftSide};
    position: absolute;
    left: 0%;
    right: 79.24%;
    top: 0%;
    bottom: 11.56%;
`;
const LeftSideText = styled.div`
    height: 26px;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight:normal;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: -0.3px;  
    color: ${(props) => props.theme.LeftSideText};
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
`;
const LeftSideLogoText = styled.div`
    padding-top: 8px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.3px; 
    color: ${(props) => props.theme.LeftSideText};
`;
export default function LeftRow (props){
    function LeftMenuFunction(data){
        props.SetCurrentContent(data);
    }
    return(
        <Left>
            <div className="Logo">
                <img src={Logo} className="LogoIcon"/>
                <div className="LogoText">
                    <LeftSideLogoText>inMusic</LeftSideLogoText>
                    <div className="AppUiKit">App UI Kit</div>
                </div>
            </div>
            <div className="LeftMenu">
                <table className="LeftMenuTable" >
                    <tr onClick={() => LeftMenuFunction("Podcasts")}>
                        <td><img className="LeftSideIcon" src={props.Theme==="dark" ? PodcastsIconDark : PodcastsIconLight}></img></td>
                        <td> <LeftSideText>Podcasts</LeftSideText></td>
                        <td className="LeftSideIconRight"></td>
                    </tr>
                    <tr onClick={() => LeftMenuFunction("Videos")}>
                        <td><img className="LeftSideIcon" src={props.Theme==="dark" ? VideoIconDark : VideoIconLight}></img></td>
                        <td> <LeftSideText>Videos</LeftSideText></td>
                        <td className="LeftSideIconRight"></td>
                    </tr>
                    <tr>
                        <td><img className="LeftSideIcon" src={props.Theme==="dark" ? TopListsIconDark : TopListsIconLight}></img></td>
                        <td> <LeftSideText>Top Lists</LeftSideText></td>
                        <td className="LeftSideIconRight"></td>
                    </tr>
                    <tr>
                        <td><img className="LeftSideIcon" src={props.Theme==="dark" ? DiscoverIconDark : DiscoverIconLight}></img></td>
                        <td> <LeftSideText>Discovers</LeftSideText></td>
                        <td className="LeftSideIconRight"></td>
                    </tr>
                    <tr>
                        <td><img className="LeftSideIcon" src={props.Theme==="dark" ? FavouritiesIconDark : FavouritiesIconLight}></img></td>
                        <td> <LeftSideText>Favourites</LeftSideText></td>
                        <td className="LeftSideIconRight"></td>
                    </tr>
                    <tr>
                        <td><img className="LeftSideIcon" src={props.Theme==="dark" ? MessageIconDark : MessageIconLight}></img></td>
                        <td> <LeftSideText>Messages</LeftSideText></td>
                        <td className="LeftSideIconRight"></td>
                    </tr>
                    <tr>
                        <td><img className="LeftSideIcon" src={props.Theme==="dark" ? PlaylistsIconDark : PlaylistsIconLight}></img></td>
                        <td> <LeftSideText>Playlists</LeftSideText></td>
                        <td><img className="LeftSideIconRight" src={props.Theme==="dark" ? AddIconDark : AddIconLight}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="LeftSideTextPlayist">summer vibes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="LeftSideTextPlayist">chill Out</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="LeftSideTextPlayist">Classic rock</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="LeftSideTextPlayist">Kids Music</td>
                        <td></td>
                    </tr>
                    
                </table>
            </div>
        </Left>
    );
}