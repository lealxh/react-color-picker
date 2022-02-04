import React, { useEffect, useState } from "react"
import "./ColorPicker.css"
function ColorPicker(props) {
  const [getColors, setColors] = useState(props.Colors)
  const [getSelectedColor, setSelectedColor] = useState(props.selectedColor)
  const [getSelectedColorTag, setSelectedColorTag] = useState(props.selectedColor)

  function ColorToHex(color) {
    var hexadecimal = color.toString(16)
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal
  }

  function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue)
  }

  function handleClick(e) {
    const colorRGB = e.target.style.backgroundColor
    const values = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/.exec(colorRGB)
    console.log(ConvertRGBtoHex(values[1], values[2], values[3]))
    setSelectedColorTag(ConvertRGBtoHex(parseInt(values[1]), parseInt(values[2]), parseInt(values[3])))
    setSelectedColor(colorRGB)
  }

  return (
    <div className="colorpicker">
      <div className="colorpicker-title">
        <div>Pick a color</div>
      </div>
      <div className="canvas" style={{ backgroundColor: getSelectedColor }}>
        <div className="colors-tag">{getSelectedColorTag}</div>
      </div>

      <div className="colors">
        {getColors.map(colorValue => {
          return (
            <div key={colorValue} onClick={handleClick} className="colors-inner" style={{ backgroundColor: colorValue }}>
              <div className="colors-tag">{colorValue}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ColorPicker
