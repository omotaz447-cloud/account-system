import React from "react";
import { Link } from "react-router-dom";

export default function SeemaCenter() {
  return (
    <div>
      <div className="header">
        <div>
          <div className="h-title">سنتر سيما</div>
          <div className="h-sub">اختر الحساب الفرعي داخل السنتر</div>
        </div>
      </div>

      <div className="subcards">
        <Link to="/branch/seema/main" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات سنتر سيما</div>
                <div className="desc">السجلات الرئيسية للمركز</div>
              </div>
              <div className="icon">🏛️</div>
            </div>
          </div>
        </Link>

        <Link to="/branch/seema/milad" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات ميلاد</div>
                <div className="desc">سجلات المورد/التاجر ميلاد</div>
              </div>
              <div className="icon">👤</div>
            </div>
          </div>
        </Link>

        <Link to="/branch/seema/wahid" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات وحيد سعيد</div>
                <div className="desc">سجلات المورد/التاجر وحيد سعيد</div>
              </div>
              <div className="icon">👤</div>
            </div>
          </div>
        </Link>

        <Link to="/branch/seema/basem" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات باسم سعيد</div>
                <div className="desc">سجلات المورد/التاجر باسم سعيد</div>
              </div>
              <div className="icon">👤</div>
            </div>
          </div>
        </Link>

        <Link to="/branch/seema/emad" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات عماد سعيد</div>
                <div className="desc">سجلات المورد/التاجر عماد سعيد</div>
              </div>
              <div className="icon">👤</div>
            </div>
          </div>
        </Link>

        <Link to="/branch/seema/mena" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات مينا ناصر</div>
                <div className="desc">سجلات المورد/التاجر مينا ناصر</div>
              </div>
              <div className="icon">👤</div>
            </div>
          </div>
        </Link>
      </div>

      <div className="card">
        <div className="small-muted">اختر أي صفحة فرعية للعمل على الحسابات الخاصة بالمركز.</div>
      </div>
    </div>
  );
}
