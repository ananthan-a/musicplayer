import React from 'react';
import data from '../../Additional/data';
import '../Style/Content.css';
import { VideoList } from '../Style/ContentStyled';
import { TextStyled } from '../../Styled/CommonStyled';

export default function FeaturedMusics(props){
    console.log(props.ScreenWidth);

    function SendMusicToPlayer(data) {
        props.SetCurrentMusic(data);
    }
    return(
        <div>
            {console.log("FeaturedMusicReturn")}
            <table className="FeaturedVideosTable">
                <tbody>
                <tr>
                    <td className="FeaturedVideosTableHeading"><TextStyled>Featured Musics</TextStyled></td>
                    <td className="FeaturedVideosTableMore">...</td>
                </tr>
                </tbody>
            </table>
            <div className="HideScrollBar">
                <VideoList ScreenWidth={props.ScreenWidth} Width={650}>{
                    data.FeaturedMusics.filter((val) => {
                        if(props.SearchTerm == ""){return val}
                        else if(val.Name.toLowerCase().includes(props.SearchTerm.toLowerCase())){return val}
                        
                    }).map((FeaturedMusic) => {
                        return (
                            <div className="GridView" key={FeaturedMusic.id}>
                                <table onClick={() => SendMusicToPlayer(FeaturedMusic)}><tbody>
                                    <tr><td><img src={FeaturedMusic.img} alt={FeaturedMusic.Name} className="ContentGridViewImage"/></td></tr>
                                    <tr>
                                        <td>
                                            <div className="FeaturedVideoName"><TextStyled>{FeaturedMusic.Name}</TextStyled></div>
                                            <div className="FeaturedVideoArtist">{FeaturedMusic.Discription}</div>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </div>
                        );
                    })
                }</VideoList>
            </div>
        </div>
    );
}
