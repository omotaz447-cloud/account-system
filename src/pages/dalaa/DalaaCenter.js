// src/pages/dalaa/DalaaCenter.js
import React from "react";
import { Link } from "react-router-dom";

export default function DalaaCenter() {
  return (
    <div>
      <div className="header">
        <div>
          <div className="h-title">سنتر دلع الهوانم</div>
          <div className="h-sub">اختر الحساب الفرعي داخل السنتر</div>
        </div>
      </div>

      <div className="subcards">
        <Link to="/branch/dalaa/primary" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات رئيسيه</div>
                <div className="desc">السجلات الرئيسية للمركز</div>
              </div>
              <div className="icon">🏛️</div>
            </div>
          </div>
        </Link>

        <Link to="/branch/dalaa/mahmoud" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات محمود موهوب</div>
                <div className="desc">سجلات المورد/التاجر محمود موهوب</div>
              </div>
              <div className="icon">👤</div>
            </div>
          </div>
        </Link>

        <Link to="/branch/dalaa/wahid" style={{ textDecoration: "none" }}>
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

        <Link to="/branch/dalaa/basem" style={{ textDecoration: "none" }}>
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

        <Link to="/branch/dalaa/emad" style={{ textDecoration: "none" }}>
          <div className="subpage-card">
            <div className="meta">
              <div>
                <div className="title">حسابات عماد ناصر</div>
                <div className="desc">سجلات المورد/التاجر عماد ناصر</div>
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
