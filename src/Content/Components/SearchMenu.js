import React from 'react';
import SearchIconDark from '../Sources/Icon/SearchIconDark.png';
import SettingsIconDark from '../Sources/Icon/SettingsIconDark.png';
import NotificationIconDark from '../Sources/Icon/NotificationIconDark.png';
import ModeIconDark from '../Sources/Icon/ModeIconDark.png';
import SearchIconLight from '../Sources/Icon/SearchIconLight.png';
import SettingsIconLight from '../Sources/Icon/SettingsIconLight.png';
import NotificationIconLight from '../Sources/Icon/NotificationIconLight.png';
import ModeIconLight from '../Sources/Icon/ModeIconLight.png';
import '../Style/Content.css';

export default function SearchMenu(props){
    const themeToggler = () => {
        console.log("Theme changed");
        props.SetCurrentTheme(props.Theme === "dark" ? "light" : "dark");
    };

    return(
        <table className="TopMenuTable">
            <tr>
                <td className="TopMenuTableIcon"><img src={props.Theme==="dark" ? SearchIconDark : SearchIconLight} className="TopMenuIcon"/></td>
                <td className="TopMenuTableSearch">
                    <input className="TopMenuSearch" type="input" placeholder="Search for artists, songs & albums..."></input>
                </td>
                <td className="TopMenuTableIcon"><img src={props.Theme==="dark" ? SettingsIconDark : SettingsIconLight} className="TopMenuIcon"/></td>
                <td className="TopMenuTableIcon"><img src={props.Theme==="dark" ? NotificationIconDark : NotificationIconLight} className="TopMenuIcon"/></td>
                <td className="TopMenuTableIcon"><img src={props.Theme==="dark" ? ModeIconDark : ModeIconLight} className="TopMenuIcon" onClick={() => themeToggler()}/></td>
            </tr>
        </table>
    );
}