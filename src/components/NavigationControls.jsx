import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * NavigationControls
 * props:
 *  - orderedRoutes: array of route strings in the exact order you want to navigate
 *
 * Behaviour:
 *  - Finds index of the current location in orderedRoutes (exact match or prefix match)
 *  - Navigate to previous/next route when buttons clicked
 *  - Disables prev/next at bounds
 */
export default function NavigationControls({ orderedRoutes = [] }) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // find best index: exact match first, otherwise prefix match (useful for /branch/:id root)
  let currentIndex = orderedRoutes.findIndex(r => r === currentPath);
  if (currentIndex === -1) {
    // fallback: find first route that is a prefix of currentPath
    currentIndex = orderedRoutes.findIndex(r => currentPath.startsWith(r));
  }

  // if still -1, we will disable both
  const atStart = currentIndex <= 0;
  const atEnd = currentIndex === -1 || currentIndex >= orderedRoutes.length - 1;

  function goPrev() {
    if (atStart) return;
    const prev = orderedRoutes[currentIndex - 1];
    if (prev) navigate(prev);
  }
  function goNext() {
    if (atEnd) return;
    const next = orderedRoutes[currentIndex + 1];
    if (next) navigate(next);
  }

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button
        className="btn ghost"
        onClick={goPrev}
        disabled={atStart}
        title="الصفحة السابقة"
        style={{ opacity: atStart ? 0.45 : 1 }}
      >
        السابق
      </button>
      <button
        className="btn"
        onClick={goNext}
        disabled={atEnd}
        title="الصفحة التالية"
        style={{ opacity: atEnd ? 0.45 : 1 }}
      >
        التالي
      </button>
    </div>
  );
}
