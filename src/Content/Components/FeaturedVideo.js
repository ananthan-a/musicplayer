import React from 'react';
import data from '../../Additional/data';
import ReactPlayer from "react-player";
import '../Style/Content.css';
import { VideoList } from '../Style/ContentStyled';
import { TextStyled } from '../../Styled/CommonStyled';

export default function FeaturedVideo(props){
    return(
        <div>
            <table className="FeaturedVideosTable"><tbody>
            <tr>
                <td className="FeaturedVideosTableHeading"><TextStyled>Featured Videos</TextStyled></td>
                <td className="FeaturedVideosTableMore">...</td>
            </tr>
            </tbody></table>
            <div className="HideScrollBar">
            <VideoList ScreenWidth={props.ScreenWidth} Width={700}>{
                data.FeaturedVideos1.filter((val) => {
                    if(props.SearchTerm == ""){return val}
                    else if(val.Name.toLowerCase().includes(props.SearchTerm.toLowerCase())){return val}
                }).map((FeaturedVideo) => {
                return (
                    <div className="GridView" key={FeaturedVideo.id}>
                        <table className="GridViewTable"><tbody>
                            <tr><td><ReactPlayer width="100%" height="auto" url={FeaturedVideo.YTLink} /></td></tr>
                            <tr><td>
                                <div className="FeaturedVideoName"><TextStyled>{FeaturedVideo.Name}</TextStyled></div>
                                <div className="FeaturedVideoArtist">{FeaturedVideo.Discription} Followers</div>
                            </td></tr>
                        </tbody></table>
                    </div>
                );
                })
            }</VideoList></div>
        </div>
    );
}