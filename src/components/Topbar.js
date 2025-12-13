// src/components/Topbar.js
import React from "react";
import PropTypes from "prop-types";

export default function Topbar({ title = "نظام إدارة الحسابات", onLogout }) {
  return (
    <div className="topbar">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div className="title">{title}</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button
          className="logout-btn danger"
          onClick={onLogout}
          title="تسجيل خروج"
        >
          تسجيل خروج
        </button>
      </div>
    </div>
  );
}
Topbar.propTypes = {
  onLogout: PropTypes.func,
  title: PropTypes.string,
};