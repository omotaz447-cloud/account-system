// src/components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function Sidebar({ branches = [] }) {
  return (
    <aside className="sidebar">
      <div>
        <div className="brand">  </div>
        <div className="small-muted">  </div>
      </div>

      <nav className="branch-list" aria-label="Branches">
        {branches.map(b => (
          <NavLink
            key={b.id}
            to={`/branch/${b.id}`}
            className={({ isActive }) => "link" + (isActive ? " active" : "")}
          >
            {b.name}
          </NavLink>
        ))}
      </nav>

      <div style={{ marginTop: "auto", fontSize: 13, color: "#9fb3ff" }}>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  branches: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }))
};