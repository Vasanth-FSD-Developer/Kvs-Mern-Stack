import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import SignUP from "./Pages/SignUp"
import About from "./Pages/About"
import Profile from "./Pages/Profile"
import Header from "./Components/Header"
import PrivateRoute from "./Components/PrivateRoute"

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/sign-in" element = {<SignIn/>} />
      <Route path="/sign-up" element = {<SignUP/>} />
      <Route path="/about" element = {<About/>} />
      <Route element = {<PrivateRoute/>}>
      <Route path="/profile" element = {<Profile/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
