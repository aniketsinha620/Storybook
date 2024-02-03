import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, danger, menu, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const dangerClass = danger ? 'danger' : '';

  // Style for aligning label to the right
  // const labelStyle = {
  //   textAlign: 'right'
  // };

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, dangerClass].join(' ')}
      {...props}
    >
      <span>{label}</span>
      {menu && <div className="additional-content">View Cameras</div>}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
       
        .danger {
          color: red;
          height: 40%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          padding: 10px;
          
         border:2px solid red;
        }
        
        .additional-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
         color:black;
          margin-left:90px;
          background: #FFFFFF;
           border-radius:0.5rem; 
          padding: 10px;
        }
      `}</style>
    </button>
  );
};

Button.propTypes = {

  primary: PropTypes.bool,

  backgroundColor: PropTypes.string,

  size: PropTypes.oneOf(['small', 'medium', 'large', 'black', 'large-high', 'large-high-danger']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Whether to show additional content
   */
  menu: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  menu: false,
};
