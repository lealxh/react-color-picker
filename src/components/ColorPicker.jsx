import React, { useEffect, useRef, useState } from "react"
import { useImmerReducer } from "use-immer"
import "./ColorPicker.css"

function ColorPicker(props) {
  const InitialState = {
    SelectedColor: {
      hex: props.selectedColor,
      r: "",
      g: "",
      b: ""
    },
    ColorButtons: props.Colors.map(colorValue => {
      return {
        isSelected: false,
        color: {
          hex: colorValue,
          r: "",
          g: "",
          b: ""
        },
        style: { backgroundColor: colorValue }
      }
    })
  }
  function reducer(draft, action) {
    switch (action.type) {
      case "Click":
        draft.SelectedColor = {
          hex: action.value,
          r: "",
          g: "",
          b: ""
        }

        for (let i = 0; i < draft.ColorButtons.length; i++) {
          if (draft.ColorButtons[i].color.hex == draft.SelectedColor.hex) {
            draft.ColorButtons[i].style = { backgroundColor: draft.ColorButtons[i].color.hex, boxShadow: draft.ColorButtons[i].color.hex + " 0px 0px 10px" }
          } else {
            draft.ColorButtons[i].style = { backgroundColor: draft.ColorButtons[i].color.hex }
          }
        }

        return

      case "TextEdit":
        console.log("Input: " + action.value)
        return
    }
  }
  const [state, dispatch] = useImmerReducer(reducer, InitialState)

  function ColorToHex(color) {
    var hexadecimal = color.toString(16)
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal
  }

  function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue)
  }

  return (
    <div className="colorpicker">
      <div className="colorpicker-title">
        <div>Pick a color</div>
      </div>
      <div className="canvas" style={{ backgroundColor: state.SelectedColor.hex }}>
        <div className="colors-tag">{state.SelectedColor.hex}</div>
      </div>
      <div className="controls-row">
        <div className="controls-column">
          <input
            value={state.SelectedColor.hex}
            onChange={e => {
              dispatch({ type: "TextEdit", value: e.target.value })
            }}
            id="hexField"
            autoComplete="off"
            type="text"
          />
          <div className="controls-label">Hex</div>
        </div>
        <div className="controls-column">
          <input id="rField" type="text" />
          <div className="controls-label">R</div>
        </div>
        <div className="controls-column">
          <input id="gField" type="text" />
          <div className="controls-label">G</div>
        </div>
        <div className="controls-column">
          <input id="bField" type="text" />
          <div className="controls-label">B</div>
        </div>
      </div>

      <div className="colors">
        {state.ColorButtons.map(value => {
          return <div key={value.color.hex} onClick={() => dispatch({ type: "Click", value: value.color.hex })} className="colors-inner" style={value.style}></div>
        })}
      </div>
    </div>
  )
}

export default ColorPicker
