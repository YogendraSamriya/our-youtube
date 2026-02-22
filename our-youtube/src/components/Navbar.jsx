
import "../styles/navbar.css"

function Navbar({ toggleSidebar }) {
  return (
    <header className="navbar">
      
      <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>

      <div className="logo">OurYouTube</div>

      <input 
        type="text"
        placeholder="Search"
        className="search-bar"
      />

      <div className="nav-actions">
        <button>Upload</button>
        <button>Login</button>
      </div>
    </header>
  )
}

export default Navbar


