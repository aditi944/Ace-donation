import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
// import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgetPassword"
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    // <Container
    //   className="d-flex align-items-center justify-content-center"
    //   style={{ minHeight: "100vh" }}
    // >
    //   <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Navbar />
              <Route exact path="/" element={<Dashboard/>} />
              <Route path="/update-profile" element={<UpdateProfile/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/navbar" element={<Navbar/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />
              <Footer/>
            </Routes>
          </AuthProvider>
        </Router>
      /* </div>
    </Container> */
  )
}

export default App