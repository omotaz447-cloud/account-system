// src/pages/ghaza/GhazaCenter.js
import React from "react";
import { Link } from "react-router-dom";

export default function GhazaCenter() {
  return (
    <div>
      <div className="header">
        <div>
          <div className="h-title">سنتر غزه</div>
          <div className="h-sub">اختر الحساب الفرعي داخل السنتر</div>
        </div>
      </div>

      <div className="subcards">
        <Link to="/branch/ghaza/main" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات سنتر غزه</div>
                <div className="desc">السجلات الرئيسية للمركز</div>
              </div>
              <div className="icon">🏛️</div>
            </div>
          </div>
        </Link>

        <Link to="/branch/ghaza/mahmoud" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات محمود موهوب — سنتر غزه</div>
                <div className="desc">سجلات المورد/التاجر محمود موهوب</div>
              </div>
              <div className="icon">👤</div>
            </div>
          </div>
        </Link>

        <Link to="/branch/ghaza/wahid" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات وحيد سعيد — سنتر غزه</div>
                <div className="desc">سجلات المورد/التاجر وحيد سعيد</div>
              </div>
              <div className="icon">👤</div>
            </div>
          </div>
        </Link>

        <Link to="/branch/ghaza/basem_wahid" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات باسم سعيد عند وحيد — سنتر غزه</div>
                <div className="desc">سجلات باسم سعيد المتعلقة بوحيد</div>
              </div>
              <div className="icon">👥</div>
            </div>
          </div>
        </Link>

        <Link to="/branch/ghaza/mena_wahid" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات مينا ناصر عند وحيد — سنتر غزه</div>
                <div className="desc">سجلات مينا ناصر المتعلقة بوحيد</div>
              </div>
              <div className="icon">👥</div>
            </div>
          </div>
        </Link>

        <Link to="/branch/ghaza/baika" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات بايكه ومخازن سنتر غزه</div>
                <div className="desc">سجلات المخازن / بايكه الخاصة بالمركز</div>
              </div>
              <div className="icon">🏷️</div>
            </div>
          </div>
        </Link>
      </div>

      <div className="card">
        <div className="small-muted">اختر أي صفحة فرعية للعمل على الحسابات داخل سنتر غزه.</div>
      </div>
    </div>
  );
}
