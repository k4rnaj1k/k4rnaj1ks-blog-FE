import { Outlet, useNavigate } from "react-router-dom"
import { isLoggedIn } from "../util/is-logged-in";

export const HomePage = () => {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ps-5 pe-5 fs-4">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <div className="navbar-brand" style={{ fontFamily: "'Minecraft', sans-serif", paddingTop: '10px' }}>
              <span style={{background: 'linear-gradient(45deg, #e3fdff, #bdfcff, #85f7ff)', backgroundClip: 'text', color: 'transparent'}}>k4rnaj1k</span>'s blog
            </div>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link" onClick={() => navigate('/blogs')}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link" onClick={() => navigate('/about')}>
              About
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link opacity-0" style={{ cursor: 'default' }} onClick={() => window.location.assign('/login')}>
              Log in
            </button>
          </li>
          {
            loggedIn &&
            <li className="nav-item">
              <button type="button" className="nav-link" onClick={() => navigate('/blogs/new')}>Create new blog</button>
            </li>
          }
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
