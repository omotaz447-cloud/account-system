import React from "react";

export default function SimpleTable({ title, data, type, onDelete }) {
  return (
    <div className="table" style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <div style={{ fontWeight: 700 }}>{title}</div>
        <div className="small-muted">{data.length} عناصر</div>
      </div>

      <table>
        <thead>
          <tr>
            <th>التاريخ</th>
            <th>البيان</th>
            <th>المبلغ</th>
            <th>إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td style={{whiteSpace:"nowrap"}}>{new Date(row.date).toLocaleString()}</td>
              <td>{row.note || row.customer || row.category || "-"}</td>
              <td>{row.amount}</td>
              <td>
                <button className="btn" style={{ background: "#dc2626" }} onClick={() => onDelete(type, row.id)}>حذف</button>
              </td>
            </tr>
          ))}

          {data.length === 0 && (
            <tr>
              <td colSpan="4" className="small-muted">لا توجد بيانات</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
