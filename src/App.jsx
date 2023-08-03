import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)

  const increaseCountByOne = () => {
    setCount((count) => count + 1)
  }

  const increaseValueByThree = () => {
    setValue((value) => value + 3)
  }

  return (
    <>
      <h1>Vite 🚀</h1>
      <div className="card">
        <Button count={count} onClick={increaseCountByOne} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Button count={value} onClick={increaseValueByThree} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
