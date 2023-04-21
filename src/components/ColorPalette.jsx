import React, {useState, useEffect} from 'react'

const ColorPalette = () => {
    const [background, setBackground] = useState("#f4f4f4")
    const [colors, setColors] = useState([])
    

    useEffect(() => {
        let rows = []
        for (let i = 0; i < 3; i++) {
            let gradientColors = [];
            if (i === 0) {
              gradientColors = [
                "rgba(255, 0, 0, 0.2)",
                "rgba(255, 0, 0, 0.3)",
                "rgba(255, 0, 0, 0.4)",
                "rgba(255, 0, 0, 0.5)",
                "rgba(255, 0, 0, 0.6)"
              ];
            } else if (i === 1) {
              gradientColors = [
                "rgba(0, 255, 0, 0.2)",
                "rgba(0, 255, 0, 0.3)",
                "rgba(0, 255, 0, 0.4)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(0, 255, 0, 0.6)"
              ];

            } else if (i === 2) {
              gradientColors = [
                "rgba(0, 0, 255, 0.2)",
                "rgba(0, 0, 255, 0.3)",
                "rgba(0, 0, 255, 0.4)",
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 0, 255, 0.6)"
              ];
            }
            rows.push(gradientColors)
        }
        const clrGradient = rows.map((item, index) => {<div key={index}
        style={{width: '10rem', height: '10rem', background: item}}> </div>})

        setColors([...colors, {clrGradient}])

    }, [])

  return (
    <div>
      <div style={{width: '80vw', height: '5rem', margin: '5rem auto', background: background}}></div>
      {
        colors.map((color, index) => {
            <div key={index} style={{width: '10rem', height: '10rem', background: color}}></div>
        })
      }
    </div>
  )
}

export default ColorPalette
