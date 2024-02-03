import React from 'react'
import Image from 'next/image';
import pageImage from '../assets/chart.png';
export default function Chart() {
    return (
        <div>
            <div className="chart">
                <Image src={pageImage} alt='' width={100} height={100}></Image>
            </div>
        </div>
    )
}
