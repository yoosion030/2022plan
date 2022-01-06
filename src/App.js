import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as P from './Pages'
import GlobalStyle from './Components/GlobalStyle'
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<P.Start />} />
          <Route path="/plan" element={<P.Plan />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App