import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft } from "react-icons/fa";
import { Button } from './Button';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="storybook-header">
      <div>
        <div className='arrow'>
          <FaArrowLeft className="arrow-icon" />
          <div className='arrow-heading'>
            <div className='arrow-heading-1'>
              <h1>VMS</h1>
              <h2>/Camera/Cameras Detail</h2>
            </div>
            <p className='arrow-heading-first'>Bank Entrance-front-view Camera1</p>
            <p className='arrow-heading-second'>View and manage camera details, recordings and connection details</p>

          </div>


        </div>
      </div>

      <>

        <div className='btn'>
          <Button size="small" onClick={onLogin} label="Edit Camera" />
          <Button size="small" onClick={onCreateAccount} label="Deactivate" />
          <Button size="small" onClick={onCreateAccount} danger="danger" label="Delete Camera" />
        </div>
      </>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
