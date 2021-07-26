import React, { useState, useRef } from 'react'
import AlbumIconDark from './Sources/Icons/AlbumIconDark.png';
import SeparatorIconDark from './Sources/Icons/SeparatorIconDark.png';
import PreviousIcon from './Sources/Icons/PreviousIcon.png';
import PlayIcon from './Sources/Icons/PlayIcon.png';
import PauseIcon from './Sources/Icons/PauseIcon.png';
import NextIcon from './Sources/Icons/NextIcon.png';
import AddSongIconDark from './Sources/Icons/AddSongIconDark.png';
import ShuffleIconDark from './Sources/Icons/ShuffleIconDark.png';
import SoundIconDark from './Sources/Icons/SoundIconDark.png';
import AlbumIconLight from './Sources/Icons/AlbumIconLight.png';
import SeparatorIconLight from './Sources/Icons/SeparatorIconLight.png';
import AddSongIconLight from './Sources/Icons/AddSongIconLight.png';
import ShuffleIconLight from './Sources/Icons/ShuffleIconLight.png';
import SoundIconLight from './Sources/Icons/SoundIconLight.png';
import             './Style/SongPlayer.css';
import Slider from './components/slider/Slider';
import data from   '../Additional/data.json';
import { TextStyled } from '../Styled/CommonStyled';
import { Player } from './Style/SongPlayerStyled';


export default function SongPlayer (arg){

    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const audioRef = useRef()

    const onChange = (e) => {
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
    }

    const PreviousSong = () => {
        var result = data.FeaturedMusics.filter(function(element){
            return element.id == parseInt(arg.CurrentMusic.id)-1
        });
        if(result.length>0){
            arg.SetCurrentMusic(result[0]);
        }
    }

    const NextSong = () => {
        var result = data.FeaturedMusics.filter(function(element){
            return element.id == parseInt(arg.CurrentMusic.id)+1
        });
        if(result.length>0){
            arg.SetCurrentMusic(result[0]);
        }
    }

    const play = (data) => {
        if(arg.CurrentMusic.Link != undefined){
            const audio = audioRef.current;
            audio.volume = 1;

            if(data === "play"){
                setIsPlaying(true)
                audio.play()
            }else {
                if (!isPlaying) {
                    setIsPlaying(true)
                    audio.play()
                }
                if (isPlaying) {
                    setIsPlaying(false)
                    audio.pause()
                }
            }
        }
        else{
            alert("Select song first")
        }
    }

    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime

        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
    }

    function secondsToHms(seconds) {
        if (!seconds) return '00:00'

        let duration = seconds
        let hours = duration / 3600
        duration = duration % 3600
        let min = parseInt(duration / 60)
        duration = duration % 60
        let sec = parseInt(duration)

        if(sec < 10){
            sec = `0${sec}`
        }
        if(min < 10){
            min = `0${min}`
        }

        if(parseInt(hours, 10) > 0){
            return `${parseInt(hours, 10)}:${min}:${sec}`
        }else if(min == 0){
            return `00:${sec}`
        }else{
            return `${min}:${sec}`
        }
    }

    if(arg.ScreenWidth > 600){
    return(
        <Player>
            <audio
                autoPlay={true}
                ref={audioRef}
                onTimeUpdate={getCurrDuration}
                onLoadedData={(e) => { 
                    console.log("audio....................................",arg.CurrentMusic)
                    play("play")
                    setDuration(e.currentTarget.duration.toFixed(2))
                }}
                src={arg.CurrentMusic.Link}
            />
            <table className="FooterTable"><tbody>
                <tr>
                    <td className="FooterTableIconAlbum"><img src={arg.CurrentMusic.img ? arg.CurrentMusic.img : (arg.Theme==="dark" ? AlbumIconDark : AlbumIconLight)} className={isPlaying ? "FooterAlbumIconPlaying" : "FooterAlbumIconNotPlaying"} alt="AlbumIcon"/></td>
                    <td className="FooterTableMusicName">
                        <TextStyled>{arg.CurrentMusic === "No Music" ? "No Music" : arg.CurrentMusic.Name}</TextStyled>
                        <div className="FooterSongDiscription">{arg.CurrentMusic === "No Music" ? "No Discription" : arg.CurrentMusic.Discription}</div>
                    </td>
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? SeparatorIconDark : SeparatorIconLight} className="FooterLeftIcon" alt="SeparateIcon"/></td>
                    <td className="FooterTableIcon"><img src={PreviousIcon} className="FooterLeftIcon" onClick={PreviousSong} alt="PreviousIcon"/></td>
                    <td className="FooterTableIcon"><img src={isPlaying ? PauseIcon : PlayIcon} onClick={play} className="FooterLeftIcon" alt="PlayIcon"/></td>
                    <td className="FooterTableIcon"><img src={NextIcon} className="FooterLeftIcon" onClick={NextSong} alt="NextIcon"/></td>
                    <td className="FooterTableTime"><TextStyled>{secondsToHms(currentTime)}</TextStyled></td>
                    <td className="FooterTableSlider"><Slider percentage={percentage} onChange={onChange} /></td>
                    <td className="FooterTableTime"><TextStyled>{secondsToHms(duration)}</TextStyled></td>
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? AddSongIconDark : AddSongIconLight} className="FooterRightIcon" alt="AddSong"/></td>
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? ShuffleIconDark : ShuffleIconLight} className="FooterRightIcon" alt="ShuffleIcon"/></td>
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? SoundIconDark : SoundIconLight} className="FooterRightIcon" alt="SoundIcon"/></td>
                </tr>
            </tbody></table>
        </Player>
    );
    }
    else{
        return(
            <Player>
            <audio
                autoPlay={true}
                ref={audioRef}
                onTimeUpdate={getCurrDuration}
                onLoadedData={(e) => { 
                    console.log("audio....................................",arg.CurrentMusic)
                    play("play")
                    setDuration(e.currentTarget.duration.toFixed(2))
                }}
                src={arg.CurrentMusic.Link}
            />
            <table className="FooterTableReturnSmallSlider"><tbody>
                <tr>
                    <td className="FooterTableTime">{secondsToHms(currentTime)}</td>
                    <td className="FooterTableSlider"><Slider percentage={percentage} onChange={onChange} /></td>
                    <td className="FooterTableTime">{secondsToHms(duration)}</td>
                </tr>
            </tbody></table>
            <table className="FooterTableReturnSmall"><tbody>
                <tr>
                    <td className="FooterTableMusicName">
                        <TextStyled>{arg.CurrentMusic === "No Music" ? "No Music" : arg.CurrentMusic.Name}</TextStyled>
                        <div className="FooterSongDiscription">{arg.CurrentMusic === "No Music" ? "No Discription" : arg.CurrentMusic.Discription}</div>
                    </td>
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? SeparatorIconDark : SeparatorIconLight} className="FooterLeftIcon" alt="SeparateIcon"/></td>
                    <td className="FooterTableIcon"><img src={PreviousIcon} className="FooterLeftIcon" onClick={PreviousSong} alt="PreviousIcon"/></td>
                    <td className="FooterTableIcon"><img src={isPlaying ? PauseIcon : PlayIcon} onClick={play} className="FooterLeftIcon" alt="PlayIcon"/></td>
                    <td className="FooterTableIcon"><img src={NextIcon} className="FooterLeftIcon" onClick={NextSong} alt="NextIcon"/></td>
                    
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? AddSongIconDark : AddSongIconLight} className="FooterRightIcon" alt="AddSong"/></td>
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? ShuffleIconDark : ShuffleIconLight} className="FooterRightIcon" alt="ShuffleIcon"/></td>
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? SoundIconDark : SoundIconLight} className="FooterRightIcon" alt="SoundIcon"/></td>
                </tr>
            </tbody></table>
        </Player>
        )
    }
    
}

