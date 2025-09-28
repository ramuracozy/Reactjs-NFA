import {BrowserRouter, Route, Routes} from "react-router"
import Home from "../Pages/index.jsx"
import Books from "./Books/Books.jsx"
import Teams from "./Teams/Teams.jsx"
import Contacts from "./Contacts/Contacts.jsx"
import LoginForm from "../components/shared/LoginForm/LoginForm.jsx"

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
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
