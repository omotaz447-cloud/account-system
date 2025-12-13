// src/pages/belina/BelinaExhibition.js
import React from "react";
import { Link } from "react-router-dom";

export default function BelinaExhibition() {
  return (
    <div>
      <div className="header">
        <div>
          <div className="h-title">البلينا — معرض الجمهورية الدولي</div>
          <div className="h-sub">اختر حساب الفرع داخل المعرض</div>
        </div>
      </div>

      <div className="subcards">
        <div style={{cursor:"pointer"}}>
          <Link to="/branch/belina/baika" style={{textDecoration:"none"}}>
            <div className="subpage-card">
              <div className="meta">
                <div>
                  <div className="title">حسابات بايكه ومخازن البلينا</div>
                  <div className="desc">سجلات مخازن وبايكه - مصروفات وتحركات</div>
                </div>
                <div className="icon">🏷️</div>
              </div>
            </div>
          </Link>
        </div>

        <div style={{cursor:"pointer"}}>
          <Link to="/branch/belina/mahmoud" style={{textDecoration:"none"}}>
            <div className="subpage-card">
              <div className="meta">
                <div>
                  <div className="title">حسابات محمود موهوب — البلينا</div>
                  <div className="desc">سجلات خاصة بالمورد/التاجر محمود موهوب</div>
                </div>
                <div className="icon">👤</div>
              </div>
            </div>
          </Link>
        </div>

        <div style={{cursor:"pointer"}}>
          <Link to="/branch/belina/wahid" style={{textDecoration:"none"}}>
            <div className="subpage-card">
              <div className="meta">
                <div>
                  <div className="title">حسابات وحيد سعيد — البلينا</div>
                  <div className="desc">سجلات خاصة بالمورد/التاجر وحيد سعيد</div>
                </div>
                <div className="icon">👤</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="card">
        <div className="small-muted">الصفحات الفرعية أعلاه مفتوحة لحفظ السجلات الخاصة بكل حساب داخل معرض الجمهورية.</div>
      </div>
    </div>
  );
}
