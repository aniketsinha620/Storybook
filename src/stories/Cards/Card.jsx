import React from 'react';
import pageImage from '../assets/page.png';
import Image from 'next/image';
import "./Card.css";
import { BiVideoRecording } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { FaClipboardQuestion } from "react-icons/fa6";
import { BiTask } from "react-icons/bi";
import { VscGraph } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Card() {
    return (
        <div className='card-container-main'>
            <div className="card-container">
                <div className="image-container">
                    <Image src={pageImage} alt="Camera View" className='image-container-image' />
                </div>
                <div className="info-container">
                    <h1 className='info-container-h1'>Bank Entrance-front-view Camera1</h1>
                    <p><BiTask className='icons-info' />3 Recipes Added</p>
                    <p><FaClipboardQuestion className='icons-info' />today, 04:45pm: Unidentified face detected</p>
                    <p><IoLocationOutline className='icons-info' />Coimbatore branch</p>
                    <div className='info-container-last'>
                        <button>Active</button>
                        <div className='icons-card-container'>
                            <RiDeleteBin6Line size={24} className='first-icon' />
                            <BiVideoRecording size={24} />
                            <VscGraph size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

