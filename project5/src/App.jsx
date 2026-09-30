import { useState } from 'react'

import Header from './components/Header'
import UserInput from './components/UserInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
      <UserInput />
    </main>
      
    </>
  )
}

export default App
