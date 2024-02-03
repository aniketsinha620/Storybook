import React from 'react';
import Image from 'next/image';
import { FaPlayCircle } from 'react-icons/fa'; // Importing the play button icon
import './Page_card.css';
import pageImage from './assets/page.png';

export default function Page_card(props) {
    const { image, time } = props;

    return (
        <div className='page-img'>
            <div className='image-container'>
                <Image src={pageImage} alt='' className='page-img-Image' width={100} height={100} />
                <div className='overlay'>
                    <FaPlayCircle className='play-icon' />
                </div>
            </div>
            <h4>Recording_0121</h4>
            <p>{time}</p>
        </div>
    );
}
