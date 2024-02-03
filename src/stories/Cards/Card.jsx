import React from 'react'
import pageImage from '../assets/page.png';
import Image from 'next/image';
import "./Card.css"

export default function Card() {
    return (
        <div className='card-container-main'>
            <div class="card-container">
                <div class="image-container">
                    <Image src={pageImage} alt="Camera View" />
                </div>
                <div class="info-container">
                    <h1>Bank Entrance-front-view Camera1</h1>
                    <p>3 Recipes Added</p>
                    <p>today, 04:45pm: Unidentified face detected</p>
                    <p>Coimbatore branch</p>
                    <p>Active</p>
                </div>
            </div>
        </div>
    )
}
