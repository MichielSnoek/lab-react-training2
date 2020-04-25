import React from 'react'
import Border from '../Border/Border.jsx'

const  rgbToHex = function (rgb) { 
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

export default function BoxColor({ r, g, b }) {
    console.log("here", r, g, b)

    const layout = { backgroundColor: `rgb(${r}, ${g}, ${b})` }
    return (
        <div>
            <Border>
                <div style={layout}>
                    {`rgb(${r}, ${g}, ${b})`}
                    <p>#{rgbToHex(r)}{rgbToHex(g)}{rgbToHex(b)}</p>
                </div>
            </Border>



        </div >
    )
}
