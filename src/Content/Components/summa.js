import react from 'react';

export function summa(FeaturedMusic){
    return(
        <div className="GridView" key={FeaturedMusic.id}>
            <table onClick={() => SendMusicToPlayer(FeaturedMusic)}><tbody>
                <tr><td><img width="100%" height="auto" src={FeaturedMusic.img} alt={FeaturedMusic.Name} className="ContentGridViewImage"/></td></tr>
                <tr>
                    <td>
                        <div className="FeaturedVideoName"><TextStyled>{FeaturedMusic.Name}</TextStyled></div>
                        <div className="FeaturedVideoArtist">{FeaturedMusic.Discription}</div>
                    </td>
                </tr>
            </tbody></table>
        </div>
    )
}