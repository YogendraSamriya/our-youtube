import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Watch from "./pages/Watch"
import Upload from "./pages/Upload"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Channel from "./pages/Channel"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/watch/:id" element={<Layout><Watch /></Layout>} />
        <Route path="/upload" element={<Layout><Upload /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/channel/:id" element={<Layout><Channel /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App