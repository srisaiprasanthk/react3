import React, { useState } from 'react';

import "./ColorPicker.css"

 

const ColorPicker = () => {

  const [selectedColor, setSelectedColor] = useState(''); // State to store the selected color

 

  const handleColorChange = (color) => {

    setSelectedColor(color);

  };

 

  const handlePickColor = () => {

    alert(`Selected color: ${selectedColor}`);

  };

 

 

  const colorOptions = [

    'red',

    'blue',

    'green',

    'yellow',

    'purple',

    'orange',

    'pink',

  ];

 

  return (

    <div className='background'>

    <div className="color-picker">

      <div className="color-rectangle" style={{ backgroundColor: selectedColor }}></div>

 

      <div className="color-options">

        {colorOptions.map((color, index) => (

          <div

            key={index}

            className="color-option"

            style={{ backgroundColor: color }}

            onClick={() => handleColorChange(color)}

          ></div>

        ))}

      </div>

 

      <button className="pick-color-button" onClick={handlePickColor}>

        Pick a Color

      </button>

    </div>

    </div>

  );

};

 

export default ColorPicker;