import React from 'react';
import data from '../../Additional/data';
import styled from "styled-components";
import ReactPlayer from "react-player";
import '../Style/Content.css';

const RightsideText = styled.div`
    colour: ${(props) => props.theme.LeftSideText};
`;

export default function FeaturedVideo(){
    return(
        <div>
            <table className="FeaturedVideosTable">
            <tr>
                <td className="FeaturedVideosTableHeading"><RightsideText>Featured Videos</RightsideText></td>
                <td className="FeaturedVideosTableMore">...</td>
            </tr>
            </table>
            <div className="VideoList">{
                data.FeaturedVideos.map((skill) => {
                return (
                    <div className="GridView">
                        <table >
                            <tr><td><ReactPlayer width="100%" height="auto" url={skill.YTLink} /></td></tr>
                            <tr><td>
                                <div className="FeaturedVideoName"><RightsideText>{skill.Name}</RightsideText></div>
                                <div className="FeaturedVideoArtist">{skill.Discription} Followers</div>
                            </td></tr>
                        </table>
                    </div>
                );
                })
            }</div>
        </div>
    );
}