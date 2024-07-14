import { useEffect, useState } from 'react'
import './App.css'
import { states } from './utils/States'

function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    const lightTimeout = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % states.length);
    }, states[activeIndex].duration)

    return () => clearTimeout(lightTimeout);
  }, [activeIndex])

  return (
    <>
      <div className='traffic-light-container'>
        {states.map((state, index) => (
          <div key={state.id} className='traffic-light' style={{ backgroundColor: state.color, opacity: index == activeIndex ? 1 : 0.3 }}></div>
        ))}
      </div>
    </>
  )
}

export default App
