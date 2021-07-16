import React, { useState, useRef, useEffect } from 'react'
import AlbumIconDark from './Sources/Icons/AlbumIconDark.png';
import SeparatorIconDark from './Sources/Icons/SeparatorIconDark.png';
import PreviousIconDark from './Sources/Icons/PreviousIconDark.png';
import PlayIconDark from './Sources/Icons/PlayIconDark.png';
import PauseIconDark from './Sources/Icons/PauseIconDark.png';
import NextIconDark from './Sources/Icons/NextIconDark.png';
import AddSongIconDark from './Sources/Icons/AddSongIconDark.png';
import ShuffleIconDark from './Sources/Icons/ShuffleIconDark.png';
import SoundIconDark from './Sources/Icons/SoundIconDark.png';
import AlbumIconLight from './Sources/Icons/AlbumIconLight.png';
import SeparatorIconLight from './Sources/Icons/SeparatorIconLight.png';
import PreviousIconLight from './Sources/Icons/PreviousIconLight.png';
import PlayIconLight from './Sources/Icons/PlayIconLight.png';
import PauseIconLight from './Sources/Icons/PauseIconLight.png';
import NextIconLight from './Sources/Icons/NextIconLight.png';
import AddSongIconLight from './Sources/Icons/AddSongIconLight.png';
import ShuffleIconLight from './Sources/Icons/ShuffleIconLight.png';
import SoundIconLight from './Sources/Icons/SoundIconLight.png';
import             './Style/SongPlayer.css';
import styled from 'styled-components';
import Slider from './components/slider/Slider';
import data from   '../Additional/data.json';

const Player = styled.div`
    background-color: ${(props) => props.theme.Footer};
    position: absolute;
    left: 0%;
    right: 0%;
    top: 88.44%;
    bottom: 0%;
    box-shadow: ${(props) => props.theme.FooterShadow};
`;

const ThemeText = styled.div`
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.3px;
    color: ${(props) => props.theme.LeftSideText};
`;

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
        console.log("data",data);
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

    return(
        <Player>
            <table className="FooterTable">
                <tr>
                    <audio
                        autoPlay="true"
                        ref={audioRef}
                        onTimeUpdate={getCurrDuration}
                        onLoadedData={(e) => { 
                            console.log("audio....................................",arg.CurrentMusic)
                            play("play")
                            setDuration(e.currentTarget.duration.toFixed(2))
                        }}
                        src={arg.CurrentMusic.Link}
                    />
                    <td className="FooterTableIconAlbum"><img src={arg.CurrentMusic.img ? arg.CurrentMusic.img : (arg.Theme==="dark" ? AlbumIconDark : AlbumIconLight)} className={isPlaying ? "FooterAlbumIconPlaying" : "FooterAlbumIconNotPlaying"}/></td>
                    <td className="FooterTableMusicName">
                        <ThemeText>{arg.CurrentMusic === "No Music" ? "No Music" : arg.CurrentMusic.Name}</ThemeText>
                        <div className="FooterSongDiscription">{arg.CurrentMusic === "No Music" ? "No Discription" : arg.CurrentMusic.Discription}</div>
                    </td>
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? SeparatorIconDark : SeparatorIconLight} className="FooterLeftIcon"/></td>
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? PreviousIconDark : PreviousIconLight} className="FooterLeftIcon" onClick={PreviousSong}/></td>
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? (isPlaying ? PauseIconDark : PlayIconDark) : (isPlaying ? PauseIconLight : PlayIconLight)} onClick={play} className="FooterLeftIcon"/></td>
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? NextIconDark : NextIconLight} className="FooterLeftIcon" onClick={NextSong}/></td>
                    <td className="FooterTableTime">{secondsToHms(currentTime)}</td>
                    <td className="FooterTableSlider"><Slider percentage={percentage} onChange={onChange} /></td>
                    <td className="FooterTableTime">{secondsToHms(duration)}</td>
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? AddSongIconDark : AddSongIconLight} className="FooterRightIcon"/></td>
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? ShuffleIconDark : ShuffleIconLight} className="FooterRightIcon"/></td>
                    <td className="FooterTableIcon"><img src={arg.Theme==="dark" ? SoundIconDark : SoundIconLight} className="FooterRightIcon" /></td>
                </tr>
            </table>
        </Player>
    );
    
}
