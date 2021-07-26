import React, { Component } from 'react';
import ColorControls from '../components/color-picker/ColorControls';
import ColorDisplay from '../components/color-picker/ColorDisplay';

export default class ColorPicker extends Component {
  state = {
    selectColor: 'red',
  };

  handleColorChange = (color) => {
    this.setState({ selectedColor: color });
  };
   
  render() {
    const colors = ['red', 'yellow', 'blue', 'pink', 'purple', 'green'];
    const { selectedColor } = this.state;

    return (
      <>
        <ColorControls colors={colors} onColorChange={this.handleColorChange} />

        <ColorDisplay backgroundColor={selectedColor} />
      </>
    );
  }
}
