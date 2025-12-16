import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [learningDropdownOpen, setLearningDropdownOpen] = useState(false);
  const [hooksDropdownOpen, setHooksDropdownOpen] = useState(false);

  const topLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
    { path: "/login", name: "Login" },
    { path: "/signup", name: "Signup" },
  ];

  const learningLinks = [
    { path: "/props", name: "Props" },
    { path: "/state", name: "State" },
    { path: "/task", name: "Task" },
    { path: "/events", name: "Events" },
  ];

  const hookLinks = [
    { path: "/hooks/usestate", name: "UseState" },
    { path: "/hooks/useeffect", name: "UseEffect" },
    { path: "/hooks/useeffectapi", name: "UseEffectAPI" },
    { path: "/hooks/fakeimageapi", name: "FakeImageAPI" },
    { path: "/hooks/usecallback", name: "UseCallback" },
    { path: "/hooks/useref", name: "UseRef" },
    { path: "/hooks/usememo", name: "UseMemo" },
  ];

  const linkStyle = (path) => ({
    padding: "8px 14px",
    margin: "0 4px",
    textDecoration: "none",
    color: location.pathname === path ? "white" : "black",
    backgroundColor: location.pathname === path ? "black" : "transparent",
    borderRadius: "4px",
    transition: "0.3s",
  });

  const navStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#fff",
    borderBottom: "2px solid #000",
    fontFamily: "Arial, sans-serif",
  };

  const dropdownButtonStyle = (isOpen) => ({
    padding: "8px 14px",
    borderRadius: "4px",
    border: "1px solid black",
    backgroundColor: isOpen ? "black" : "transparent",
    color: isOpen ? "white" : "black",
    cursor: "pointer",
    transition: "0.3s",
  });

  const dropdownMenuStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#000",
    borderRadius: "4px",
    marginTop: "4px",
    minWidth: "160px",
    zIndex: 100,
  };

  const dropdownLinkStyle = (path) => ({
    display: "block",
    padding: "8px 14px",
    textDecoration: "none",
    color: location.pathname === path ? "black" : "white",
    backgroundColor: location.pathname === path ? "white" : "black",
    transition: "0.3s",
  });

  return (
    <nav style={navStyle}>
      {/* Top Links */}
      {topLinks.map((link) => (
        <Link key={link.path} to={link.path} style={linkStyle(link.path)}>
          {link.name}
        </Link>
      ))}

      {/* Learning React Dropdown */}
      <div style={{ position: "relative", marginLeft: "8px" }}>
        <button
          onClick={() => setLearningDropdownOpen(!learningDropdownOpen)}
          style={dropdownButtonStyle(learningDropdownOpen)}
        >
          Learning React ▼
        </button>

        {learningDropdownOpen && (
          <div style={dropdownMenuStyle}>
            {learningLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={dropdownLinkStyle(link.path)}
                onClick={() => setLearningDropdownOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Hooks Dropdown */}
      <div style={{ position: "relative", marginLeft: "8px" }}>
        <button
          onClick={() => setHooksDropdownOpen(!hooksDropdownOpen)}
          style={dropdownButtonStyle(hooksDropdownOpen)}
        >
          Hooks ▼
        </button>

        {hooksDropdownOpen && (
          <div style={dropdownMenuStyle}>
            {hookLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={dropdownLinkStyle(link.path)}
                onClick={() => setHooksDropdownOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
