import React from 'react';
import data from '../../Additional/data';
import styled from "styled-components";
import '../Style/Content.css';

const RightsideText = styled.div`
    colour: ${(props) => props.theme.LeftSideText};
`;

export default function FeaturedMusics(props){
    console.log("FeaturedMusic");
    function SendMusicToPlayer(data) {
        //console.log("C send : ", data);
        props.SetCurrentMusic(data);
    }
    return(
        <div>
            {console.log("FeaturedMusicReturn")}
            <table className="FeaturedVideosTable">
                <tr>
                    <td className="FeaturedVideosTableHeading"><RightsideText>Featured Musics</RightsideText></td>
                    <td className="FeaturedVideosTableMore">...</td>
                </tr>
            </table>
            <div className="VideoList">{
                data.FeaturedMusics.map((skill) => {
                    return (
                        <div className="GridView">
                            <table onClick={() => SendMusicToPlayer(skill)}>
                                <tr><td><img width="100%" height="auto" src={skill.img}/></td></tr>
                                <tr>
                                    <td>
                                        <div className="FeaturedVideoName"><RightsideText>{skill.Name}</RightsideText></div>
                                        <div className="FeaturedVideoArtist">{skill.Discription}</div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    );
                })
            }</div>
        </div>
    );
}
//() => SendMusicToPlayer(skill)