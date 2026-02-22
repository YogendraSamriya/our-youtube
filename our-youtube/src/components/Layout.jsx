import { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import "../styles/layout.css"

function Layout({ children }) {

  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="layout">
      <Navbar toggleSidebar={() => setCollapsed(!collapsed)} />

      <div className="layout-body">
        <Sidebar collapsed={collapsed} />
        
        <main className="content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout