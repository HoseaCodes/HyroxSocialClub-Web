import React from "react";
import Image from "next/image";

export default function NavBar() {
    return (
      <>
        <header>
          <div className="section-forheader wrapper">
            <div className="main-row-of-header">
              <div className="logo-sec">
                <Image
                  height={100}
                  width={100}
                  alt="logo"
                  src="/images/hyrox-logo.png"
                />
              </div>
              <div className="navbar">
                <ul>
                  <a href="#">
                    <li>Home</li>
                  </a>
                  <li>About</li>
                  <li>Community</li>
                  <li>Download</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div>
                <button className="nav-button">Join Now</button>
              </div>
            </div>
          </div>
        </header>
        {/* header for mobile and tab 769px Start */}
        <header>
          <div className="hamburger-menu">
            <div className="bar" />
          </div>
          <nav className="mobile-menu">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="has-children">
                About <span />
              </li>
              <li>
                <a href="contact.html">Community</a>
              </li>
              <li>
                <a href="contact.html">Download</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
            </ul>
          </nav>
          <div className="humb-img">
            <Image
              height={100}
              width={100}
              alt="logo"
              src="/images/hyrox-logo.png"
            />
          </div>
        </header>
      </>
    );
};