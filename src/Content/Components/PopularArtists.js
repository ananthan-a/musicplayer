import React from 'react';
import data from '../../Additional/data';
import PopularArtistsIcon from '../Sources/Icon/PopularArtists.png';
import styled from "styled-components";
import '../Style/Content.css';

const RightsideText = styled.div`
    color: ${(props) => props.theme.LeftSideText};
`;

export default function PopularArtists(){
    return(
        <div>
            <div className="PopularArtists1">
                <table className="PopularArtistsTable1">
                    <tr>
                        <td className="PopularArtistsTable1_1"><RightsideText>Popular Artists</RightsideText></td>
                        <td className="PopularArtistsTable1_2">show more</td>
                    </tr>
                </table>
            </div>
            <div className="PopularArtists2">
                <table className="PopularArtistsTable2">{
                    data.PopularArtists.map((skill) => {
                        return (
                            <tr>
                                <td className="PopularArtistsTable2_1"><img src={PopularArtistsIcon} className="PopularArtistsTable2_1_Icon"/></td>
                                <td className="PopularArtistsTable2_2">
                                    <div className="PopularArtistsTable2_2_1"><RightsideText>{skill.Name}</RightsideText></div>
                                    <div className="PopularArtistsTable2_2_2">{skill.Followers} Followers</div>
                                </td>
                                <td className="PopularArtistsTable2_3">...</td>
                            </tr>
                        );
                    })
                }</table>
            </div>
        </div>
    )
}