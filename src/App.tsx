import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import { GlobalStyle } from './components/header/styled'
import Employer from "./pages/employer/Employer";




function App() {

  return (
    <>
     <GlobalStyle/>
     <BrowserRouter>

     <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/funcionarios" element={<Employer/>}/>
     </Routes>
     
     </BrowserRouter>
     </>
  )
}

export default App
