import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft } from "react-icons/fa";
import { Button } from './Button';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="storybook-header">
      <div>
        <FaArrowLeft className="arrow-icon"  />

        <h1>Acme</h1>
      </div>
      <div>
        {/* {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
         
        )} */}
        <>
          <Button size="small" onClick={onLogin} label="Edit Camera" />
          <Button size="small" onClick={onCreateAccount} label="Deactivate" />
          <Button size="small" onClick={onCreateAccount} danger="danger" label="Delete Camera" />
        </>
      </div>
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
