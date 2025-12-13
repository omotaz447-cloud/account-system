// src/components/SubPageCard.js
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

/**
 * SubPageCard
 * props:
 *  - title (string)
 *  - desc (string)
 *  - route (string)  -> يستخدم navigate(route)
 *  - icon (string|node)
 *  - stats (array) optional
 */
export default function SubPageCard({ title, desc, route, icon, stats = [] }) {
  const navigate = useNavigate();

  function handleClick() {
    if (route) navigate(route);
  }

  return (
    <div
      className="subpage-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") handleClick(); }}
      aria-label={title}
    >
      <div className="icon" aria-hidden>
        {typeof icon === "string"
          ? <span style={{ display: "inline-block", transform: "translateY(-2px)" }}>{icon}</span>
          : icon}
      </div>

      <div className="content">
        <div className="title" title={title}>{title}</div>
        {desc && <div className="desc">{desc}</div>}

        {stats && stats.length > 0 && (
          <div className="bottom">
            {stats.map((s, i) => (
              <div key={i} className="stat">{s}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

SubPageCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  route: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  stats: PropTypes.array,
};

SubPageCard.defaultProps = {
  desc: "",
  route: "",
  icon: "📄",
  stats: [],
};
