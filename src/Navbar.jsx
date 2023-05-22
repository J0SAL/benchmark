import React from "react";

function Navbar() {
  const currentPath = "/status";
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top justfiy-content-betweens">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://vitess.io/img/logos/vitess.png"
            style={{ height: "2rem" }}
            alt="logo"
          />
          Benchmark
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item${currentPath === "/" ? " active" : ""}`}>
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li
              className={`nav-item${
                currentPath === "/status" ? " active" : ""
              }`}
            >
              <a className="nav-link" href="/status">
                Status
              </a>
            </li>
            <li
              className={`nav-item${currentPath === "/cron" ? " active" : ""}`}
            >
              <a className="nav-link" href="/cron">
                CRON
              </a>
            </li>
            <li
              className={`nav-item${
                currentPath === "/compare" ? " active" : ""
              }`}
            >
              <a className="nav-link" href="/compare">
                Compare
              </a>
            </li>
            <li
              className={`nav-item${
                currentPath === "/search" ? " active" : ""
              }`}
            >
              <a className="nav-link" href="/search">
                Search
              </a>
            </li>

            <li
              className={`nav-item${
                currentPath === "/microbench" ? " active" : ""
              }`}
            >
              <a className="nav-link" href="/microbench">
                Micro
              </a>
            </li>
            <li
              className={`nav-item${
                currentPath === "/macrobench" ? " active" : ""
              }`}
            >
              <a className="nav-link" href="/macrobench">
                Macro
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
