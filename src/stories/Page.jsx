import React from 'react';
import { BiVideoRecording } from "react-icons/bi";
import { Header } from './Header';
import { LuRefreshCcwDot } from "react-icons/lu";
import Btn from './Bttn'; // Importing the component correctly
import './page.css';
import Image from 'next/image';
import pageImage from './assets/page.png';

export const Page = () => {
  const [user, setUser] = React.useState();

  // Define the camera details
  const cameraDetails = [
    { label: 'Location:', value: 'Coimbatore' },
    { label: 'City:', value: 'Coimbatore' },
    { label: 'Timezone:', value: 'Delhi-India' },
    { label: 'Date added:', value: 'Aug 03, 2023 12:01:42 PM' },
    { label: 'Last update:', value: 'Aug 03, 2023 12:01:42 PM' },
    { label: 'Manufacture details:', value: 'ADT' },
    { label: 'RTSP/HLS URL:', value: 'Copy URL' },
  ];

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <div className='storybook-page'>
        <div className="storybook-page-firstdiv">
          <div className='storybook-page-firstdiv-btn'>
            <Btn icon={BiVideoRecording} text="View Recorded Videos" />
            <Btn icon={LuRefreshCcwDot} text="Refetch Camera" />
          </div>


          <div className='storybook-page-firstdiv-card'>

            <div className='storybook-page-firstdiv-card-photo'>
              <Image src={pageImage} alt='' className='storybook-page-firstdiv-card-photo-Image' />
              <div className='photo-details'>
                <p>01/05/2023 02:42:21 PM</p>
                <p>Hall 01</p>
              </div>
            </div>
            <div className='storybook-page-firstdiv-card-text'>
              <div className='heading-storybook-page'>
                <h1>Camera Details</h1>
                <button>Active</button>
              </div>
              <div className='form-storybook-page'>
                {cameraDetails.map((detail, index) => (
                  <div key={index} className={`detail-item ${index === cameraDetails.length - 1 ? 'last-item' : ''}`}>
                    <span className="detail-label">{detail.label}</span>
                    <span className={`detail-value ${index === cameraDetails.length - 1 ? 'last-value' : ''}`}>{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            
                </div>
        </div>
       
        
      </div>
    </article>
  );
};
