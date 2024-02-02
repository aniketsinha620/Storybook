import React from 'react';
import { BiVideoRecording } from "react-icons/bi";
import "./Bttn.css"
export default function Bttn(props) {
    const Icon = props.icon;
    const text = props.text; // Using props.icon instead of props.icons
    return (
        <div className='bttn-button'>
            <Icon  className="bttn-icon"/>
            <p className='bttn-button-text'>{text}</p> {/* Using the icon component */}
        </div>
    );
}
