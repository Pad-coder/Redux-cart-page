import React from 'react'

function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light"
        id="NavBar" >
        <div className="container px-4 px-lg-5">
            <h2>E-Cart</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
  </>
}

export default Navbar