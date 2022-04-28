import React from 'react'

const ColorConverter = (props) => {
    function RGBAToHexA(r,g,b,a) {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
        a = Math.round(a * 255).toString(16);
      
        if (r.length == 1)
          r = "0" + r;
        if (g.length == 1)
          g = "0" + g;
        if (b.length == 1)
          b = "0" + b;
        if (a.length == 1)
          a = "0" + a;
      
        return "#" + r + g + b + a;
    }
    
    function hexToRGBA(h) {
        let r = 0, g = 0, b = 0, a = 1;
    
        // 3 digits
        if (h.length == 4) {
            r = "0x" + h[1] + h[1];
            g = "0x" + h[2] + h[2];
            b = "0x" + h[3] + h[3];
            return "rgb("+ +r + ", " + +g + ", " + +b + ")";
        // 6 digits
        } else if (h.length == 7) {
            r = "0x" + h[1] + h[2];
            g = "0x" + h[3] + h[4];
            b = "0x" + h[5] + h[6];
            return "rgb("+ +r + ", " + +g + ", " + +b + ")";
        }
        else if (h.length == 5) {
            r = "0x" + h[1] + h[1];
            g = "0x" + h[2] + h[2];
            b = "0x" + h[3] + h[3];
            a = "0x" + h[4] + h[4];
            a = +(a / 255).toFixed(3);
            return "rgba(" + +r + ", " + +g + "," + +b + ", " + a + ")";      
        } else if (h.length == 9) {
            r = "0x" + h[1] + h[2];
            g = "0x" + h[3] + h[4];
            b = "0x" + h[5] + h[6];
            a = "0x" + h[7] + h[8];
            a = +(a / 255).toFixed(3);
            return "rgba(" + +r + ", " + +g + ", " + +b + ", " + a + ")";
        }
    }

    return (
        <div className='RGBColorField'>
            <label>{hexToRGBA(props.color)}</label>
        </div>
    )
}

export default ColorConverter;