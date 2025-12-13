// src/components/SmallCard.js
import React from "react";

/**
 * SmallCard
 * Props:
 *  - title
 *  - value
 *  - hint (optional)  <-- سنخفي "مصروفات" تلقائياً
 *  - accent (optional)
 */
export default function SmallCard({ title, value, hint, accent }) {
  // لا نعرض الحقل "المصروفات" — نتجاهل أي hint يحتوي على كلمة "مصروف"
  const hideHint = typeof hint === "string" && /مصروف/i.test(hint);

  return (
    <div className="card small" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <div style={{ fontSize: 13, color: "#334155", fontWeight: 800 }}>{title}</div>
        {/* إذا كان الـ hint موجود و ليس ممنوعًا عرضه نعرضه */}
        {!hideHint && hint && (
          <div style={{ color: "var(--muted)", fontSize: 12, marginTop: 6 }}>{hint}</div>
        )}
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontSize: 18, fontWeight: 800 }}>{value}</div>
        {accent && <div style={{ fontSize: 12, color: "var(--muted)" }}>{accent}</div>}
      </div>
    </div>
  );
}
