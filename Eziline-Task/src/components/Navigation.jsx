import React from "react";
import '../css/nav.css';

export function Navigation() {
  return (
    <div className="navFlex">
      <a href="index.html" className="Arc">ArcLab.</a>
      <nav className="navbar">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html">About</a></li>
          <li><a href="index.html">Team</a></li>
          <li><a href="index.html">Services</a></li>
          <li><a href="index.html">Project</a></li>
          <li><a href="index.html">Blog</a></li>
          <li><a href="index.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}