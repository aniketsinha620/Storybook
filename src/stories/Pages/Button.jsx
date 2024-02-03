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
  const labelStyle = {
    textAlign: 'right'
  };

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, dangerClass].join(' ')}
      {...props}
    >
      <span style={labelStyle}>{label}</span>
      {menu && <div className="additional-content">Aniket Sinha</div>}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
       
        .danger {
          color: red;
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
  /**
   * How large should the button be?
   */
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
