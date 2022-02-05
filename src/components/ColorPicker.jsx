import React, { useEffect, useRef, useState } from "react"
import { useImmerReducer } from "use-immer"
import "./ColorPicker.css"

function ColorPicker(props) {
  const hexField = useRef(null)
  const rField = useRef(null)
  const gField = useRef(null)
  const bField = useRef(null)

  const InitialState = {
    SelectedColor: {
      hex: props.selectedColor,
      r: 0,
      g: 0,
      b: 0
    },
    ColorButtons: props.Colors.map(colorValue => {
      return {
        isSelected: false,
        color: {
          hex: colorValue,
          r: 0,
          g: 0,
          b: 0
        },
        style: { backgroundColor: colorValue }
      }
    })
  }

  const [state, dispatch] = useImmerReducer(reducer, InitialState)

  useEffect(() => {
    dispatch({ type: "hexToRGB", value: state.SelectedColor.hex })
  }, [state.SelectedColor.hex])

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
            draft.ColorButtons[i].style = { backgroundColor: draft.ColorButtons[i].color.hex, boxShadow: "black 0px 0px 10px" }
          } else {
            draft.ColorButtons[i].style = { backgroundColor: draft.ColorButtons[i].color.hex }
          }
        }

        return

      case "TextEdit":
        console.log("Input: " + action.value)
        return

      case "hexToRGB":
        draft.SelectedColor.hex = action.value
        try {
          var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(draft.SelectedColor.hex)
          draft.SelectedColor.r = parseInt(result[1], 16)
          draft.SelectedColor.g = parseInt(result[2], 16)
          draft.SelectedColor.b = parseInt(result[3], 16)
        } catch (error) {}

        return

      case "RGBToHex":
        try {
          if (action.value.r) draft.SelectedColor.r = action.value.r
          if (action.value.g) draft.SelectedColor.g = action.value.g
          if (action.value.b) draft.SelectedColor.b = action.value.b
          draft.SelectedColor.hex = ConvertRGBtoHex(draft.SelectedColor.r, draft.SelectedColor.g, draft.SelectedColor.b)
        } catch (error) {}

        return
    }
  }
  function testValueRGB(value) {
    return /(\d+)/.test(value) && parseInt(value) < 256
  }
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
              dispatch({ type: "hexToRGB", value: e.target.value })
            }}
            id="hexField"
            autoComplete="off"
            type="text"
          />
          <div className="controls-label">Hex</div>
        </div>
        <div className="controls-column">
          <input
            id="rField"
            type="text"
            name="rField"
            value={state.SelectedColor.r}
            onChange={e => {
              if (testValueRGB(e.target.value)) dispatch({ type: "RGBToHex", value: { r: e.target.value } })
            }}
          />
          <div className="controls-label">R</div>
        </div>
        <div className="controls-column">
          <input
            id="gField"
            type="text"
            name="gField"
            value={state.SelectedColor.g}
            onChange={e => {
              if (testValueRGB(e.target.value)) dispatch({ type: "RGBToHex", value: { g: e.target.value } })
            }}
          />
          <div className="controls-label">G</div>
        </div>
        <div className="controls-column">
          <input
            id="bField"
            name="bField"
            type="text"
            value={state.SelectedColor.b}
            onChange={e => {
              if (testValueRGB(e.target.value)) dispatch({ type: "RGBToHex", value: { b: e.target.value } })
            }}
          />
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
