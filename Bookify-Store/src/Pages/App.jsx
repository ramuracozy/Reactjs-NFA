import {BrowserRouter, Route, Routes} from "react-router"
import Home from "../Pages/index.jsx"
import Books from "./Books/Books.jsx"
import Teams from "./Teams/Teams.jsx"
import Contacts from "./Contacts/Contacts.jsx"
import LoginForm from "../components/LoginForm.jsx"
import Services from "./Services/Services.jsx"

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="books" element={<Books/>}/>
            <Route path="teams" element={<Teams/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="login" element={<LoginForm/>}/>
            <Route path="services" element={<Services/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
