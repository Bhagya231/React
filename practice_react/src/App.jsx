import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Main from './components/Main'
import Nav from './components/Nav'
import {Examples} from './components/Examples'
import {Products} from './components/Products'
import Footer from './components/footer'

function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
         {/* <div>
        <Main />
       </div> */}
      <Nav />
      <Products />
      <Examples />
      <Footer />




    </>
  )
}

export default App
