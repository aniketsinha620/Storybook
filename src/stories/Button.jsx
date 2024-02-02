import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, danger, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const dangerClass = danger ? 'danger' : '';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, dangerClass].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
       
        .danger {
          color: red;
         border:2px solid red;
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
