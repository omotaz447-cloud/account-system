import React from "react";
import { Link } from "react-router-dom";

export default function GargaExhibitionMall() {
  return (
    <div>
      <div className="header">
        <div>
          <div className="h-title">جرجا — معرض مول العرب</div>
          <div className="h-sub">اختر الحساب داخل معرض مول العرب</div>
        </div>
      </div>

      <div className="subcards">
        <Link to="/branch/garga/baika" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات بايكه ومخازن جرجا</div>
                <div className="desc">سجلات المخازن والحركيات الخاصة بالمعرض</div>
              </div>
              <div className="icon">🏷️</div>
            </div>
          </div>
        </Link>

        <Link to="/branch/garga/mahmoud" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات محمود موهوب</div>
                <div className="desc">سجلات خاصة بالمورد/التاجر محمود موهوب</div>
              </div>
              <div className="icon">👤</div>
            </div>
          </div>
        </Link>

        <Link to="/branch/garga/wahid" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات وحيد سعيد</div>
                <div className="desc">سجلات خاصة بالمورد/التاجر وحيد سعيد</div>
              </div>
              <div className="icon">👤</div>
            </div>
          </div>
        </Link>
      </div>

      <div className="card">
        <div className="small-muted">اختر أي صفحة فرعية للعمل على الحسابات داخل معرض مول العرب.</div>
      </div>
    </div>
  );
}
