import { useState } from 'react'
import loginImage from './assets/img/loginImage.svg'
import './App.css'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      {/* <img src ={loginImage} alt="login"/> */}
      <Header/>
      <MainComponent/>
      <Footer/>
     </div>
    </>
  )
}

export default App
