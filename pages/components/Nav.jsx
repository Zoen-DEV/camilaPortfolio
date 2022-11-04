import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [displayLinks, setDisplayLinks] = useState({ display: "none" });
  const [projectFlag, setProjectFlag] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="nav_container">
      <ul className="links_fullscreen">
        <li>
          <Link className="link" href="/">
            Home
          </Link>
        </li>
        <li
          onMouseOver={(e) => {
            setDisplayLinks({ display: "flex" });
            setProjectFlag(true);
          }}
          onMouseOut={(e) => {
            setDisplayLinks({ display: "none" });
            setProjectFlag(false);
          }}
        >
          <button>
            <i
              className={
                projectFlag ? "bi bi-caret-up-fill" : "bi bi-caret-down-fill"
              }
            ></i>
            Proyects
          </button>
          <div style={displayLinks} className="proyects_container">
            <Link className="link" href="/audiovisual">
              Audiovisual
            </Link>
            <Link className="link" href="/photography">
              Photography
            </Link>
          </div>
        </li>
        <li>
          <Link className="link" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" href="/about">
            Contact me
          </Link>
        </li>
      </ul>
      <div className="links_responsive_container">
        <button
          onClick={() => {
            if (toggleMenu) {
              setToggleMenu(false);
            } else {
              setToggleMenu(true);
            }
          }}
          className="toggle_nav"
        >
          <i className={toggleMenu ? "bi bi-list-nested" : "bi bi-list"}></i>
        </button>
        <ul
          style={{
            display: toggleMenu ? "flex" : "none",
          }}
          className="links_responsive"
        >
          <li>
            <Link className="link" href="/">
              Home
            </Link>
          </li>
          <li
            onClick={(e) => {
              if(projectFlag){
                setDisplayLinks({ display: "none" });
                setProjectFlag(false);
              } else {
                setDisplayLinks({ display: "flex" });
                setProjectFlag(true);
              }
            }}
          >
            <button>
              <i
                className={
                  projectFlag ? "bi bi-caret-up-fill" : "bi bi-caret-down-fill"
                }
              ></i>
              Proyects
            </button>
            <div style={displayLinks} className="proyects_container">
              <Link className="link" href="/audiovisual">
                Audiovisual
              </Link>
              <Link className="link" href="/photography">
                Photography
              </Link>
            </div>
          </li>
          <li>
            <Link className="link" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" href="/about">
              Contact me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
