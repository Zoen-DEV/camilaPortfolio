"use client";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [showProjectsLinks, setShowProjectsLinks] = useState({
    display: "none",
  });
  // const [scrollY, setScrollY] = useState(0);

  // const onScroll = useCallback((event) => {
  //   const { pageYOffset } = window;
  //   setScrollY(pageYOffset);
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", onScroll, { passive: true });
  //   };
  // }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li
          onMouseOver={() => setShowProjectsLinks({ display: "flex" })}
          onMouseLeave={() => setShowProjectsLinks({ display: "none" })}
        >
          <Link href="/projects">Projects</Link>
          <div style={showProjectsLinks} className="projects_links">
            <Link href="/projects/video">Video</Link>
            <Link href="/projects/photo">Photograph</Link>
          </div>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
