import { useState } from 'react'
import './App.css'
import ColorPalette from './components/ColorPalette'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorPalette />
    </>
  )
}

export default App
