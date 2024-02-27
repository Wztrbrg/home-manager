import "../assets/style/sidebar.scss"

function SideBar () {

  return (
    <div className="side-bar">
      <div className="user-section">
        <h3>Welcome back, User</h3>
        <div className="user-btn-container">
          <button>Profile</button>
          <button>Settings</button>
          <button>Log out</button>
        </div>
      </div>

      <div className="category-section">
        <nav className="category-nav">
          <ul className="category-list">
            <li className="category-item"><button>Category</button></li>
            <li className="category-item"><button>Category</button></li>
            <li className="category-item"><button>Category</button></li>
            <li className="category-item"><button>Category</button></li>
            <li className="category-item"><button>Category</button></li>
            <li className="category-item"><button>Category</button></li>
          </ul>
        </nav>
      </div>
      <div className="favorite-section">
        <nav className="favorite-nav">
          <ul className="favorite-list">
            <li className="favorite-item"><button>Favorite</button></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default SideBar;