import React, { Suspense } from 'react'
import './App.css'
import Player from './Player'

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <Player />
      </Suspense>
    </div>
  )
}

export default App
