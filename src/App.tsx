import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Authentification } from './features/Authentification/components/Authentification';

function App() {

  return <Main />
}

const Main = () => {
  return (
    <main className="block w-full h-screen bg-black">
      <Authentification />
    </main>
  )
}

export default App;
