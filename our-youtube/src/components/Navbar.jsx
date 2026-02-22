import { Search, Mic, Plus, Bell, User } from "lucide-react";
import "../styles/navbar.css"

function Navbar({ toggleSidebar }) {
  return (
    <header className="navbar">
      
      <div className="left">
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
         </button>

         <div className="logo">OurYouTube</div>
      </div>

      <div className="nav-center">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <button className="search-btn">
             <Search size={18} />
          </button>
        </div>

        <button className="mic-btn">
          <Mic size={20} />
        </button>
      </div>

      <div className="nav-actions">
        <button className="create-btn">
          <Plus size={18} />
          <span>Create</span>
        </button>

        <button className="icon-btn notification-btn">
          <Bell size={20} />
          <span className="badge">9+</span>
        </button>

        <button className="icon-btn">
          <User size={20} />
        </button>
      </div>
    </header>
  )
}

export default Navbar


