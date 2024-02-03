import React from 'react';
import Image from 'next/image';
import { FaPlayCircle } from 'react-icons/fa';
import { FaPlay } from "react-icons/fa6"; // Importing the play button icon
import './Page_card.css';
import pageImage from '../assets/page.png';

export default function Page_card(props) {
    const { image, time } = props;

    return (
        <div className='page-img'>
            <div className='image-container'>
                <Image src={pageImage} alt='' className='page-img-Image' width={100} height={100} />
                <div className='overlay'>
                    <div className="buttonContainer">

                    <FaPlay size={24} className='play-icon' />
                    </div>
                   
                </div>
            </div>
            <h4>Recording_0121</h4>
            <p>{time}</p>
        </div>
    );
}
