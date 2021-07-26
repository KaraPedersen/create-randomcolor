import React from 'react';
import PropTypes from 'prop-types';

const ColorControls = ({ colors, onColorChange }) => {
  return (
    <>
    {colors.map((color) => (
      <button
      key={color}
      style={{ backgroundColor: color }}
      onClick={() => onColorChange(color)}
      >
        {color}
        </button>
    ))}
    <>
  );
};

ColorControls.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default ColorControls;

