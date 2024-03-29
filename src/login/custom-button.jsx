import React from 'react';
import './custom-button.css';

const CustomButton = ({ children, ...props }) => (
  <button className="custom-button" {...props}>{children}</button>
);

export default CustomButton;
