import './App.css'
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from './Router'
import { Suspense } from 'react'


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={"cargando..."}>
          <AppRouter/>
        </Suspense>
      </BrowserRouter>  
    </>
  )
}

export default App
