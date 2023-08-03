import React, { useRef } from 'react'
import Navbar from '../components/Navbar.tsx'
import Introduction from '../components/Introduction.js'
import Countries from '../components/Countries.js'

const Home = () => {

  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth"})  

  return (
    <>
    <div>
      <Navbar />
    </div>
    <div>
      <Introduction func={executeScroll} />
    </div>
    <div ref={myRef}>
      <Countries />
    </div>
    </>
  )
}

export default Home