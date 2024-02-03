import React from 'react';
import Image from 'next/image';
import "./Chart.css";
import { CiCircleAlert } from "react-icons/ci";
import pageImage from '../assets/chart.png';
import { Button } from '../Pages/Button';
import { GiCctvCamera } from "react-icons/gi";
import { GoAlert } from "react-icons/go";

import { FaCamera, FaExclamationCircle } from 'react-icons/fa'; // Importing the icons

export default function Chart() {
    // Array of objects containing labels and counts
    const data = [
        {
            label: 'Super Healthy', count: 56, color: '#19A01E'
        },
        { label: 'Healthy', count: 35, color: '#00DB4A' },
        { label: 'Warning', count: 27, color: '#FB8B34' },
        { label: 'Danger', count: 6, color: '#FF6347' }
    ];

    return (
        <div className='main-chart'>
            <div className="chart">
                <div className='chart-Image '> <Image src={pageImage} alt='' width={100} height={100} className='chart-Image-1 ' /></div>

                <div className='chart-text'>
                    <Button size="large-high" menu={false} label={<><GiCctvCamera /> Totally 124 Cameras are in 9 NVRs and installed in 12 Locations</>} />
                    <Button size="large-high-danger" menu={true} label={<><GoAlert /> 6 Cameras were experiencing downtime in Last 30 days</>} />
                    <div className="radio-chart">
                        {/* Mapping through the data array to render radio-chart-buttons */}
                        {data.map((item, index) => (
                            <div className='radio-chart-button' key={index}>
                                <button style={{ backgroundColor: item.color }}></button>
                                <p>{item.label} ({item.count})</p>
                                <CiCircleAlert style={{ color: 'grey' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


