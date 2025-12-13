// src/components/SearchPanel.jsx
import React from "react";
import PropTypes from "prop-types";

/**
 * Props:
 * - filters: { q: string, name: string, from: string (yyyy-mm-dd), to: string }
 * - onChange: (nextFilters) => void
 * - onClear: () => void
 */
export default function SearchPanel({ filters = {}, onChange = () => {}, onClear = () => {} }) {
  const { q = "", name = "", from = "", to = "" } = filters;

  const update = (patch) => onChange({ ...filters, ...patch });

  const styleRow = {
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
  };

  const inputStyle = {
    padding: "8px 10px",
    borderRadius: 8,
    border: "1px solid #e2e8f0",
    minWidth: 160,
    boxSizing: "border-box",
  };

  const btn = {
    padding: "8px 14px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={{ marginBottom: 12 }}>
      <div style={styleRow}>
        <input
          style={{ ...inputStyle, minWidth: 260 }}
          placeholder="بحث عام..."
          value={q}
          onChange={(e) => update({ q: e.target.value })}
        />

        <input
          style={inputStyle}
          placeholder="بحث بالاسم..."
          value={name}
          onChange={(e) => update({ name: e.target.value })}
        />

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            style={inputStyle}
            type="date"
            value={from}
            onChange={(e) => update({ from: e.target.value })}
          />
          <span style={{ color: "#666" }}>إلى</span>
          <input
            style={inputStyle}
            type="date"
            value={to}
            onChange={(e) => update({ to: e.target.value })}
          />
        </div>

        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button
            type="button"
            onClick={() => onChange({ ...filters })}
            style={{ ...btn, background: "#0f172a", color: "#fff" }}
          >
            تحديث
          </button>
          <button
            type="button"
            onClick={() => onClear()}
            style={{ ...btn, background: "#fff", border: "1px solid #ccc" }}
          >
            مسح
          </button>
        </div>
      </div>
    </div>
  );
}

SearchPanel.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
  onClear: PropTypes.func
};
