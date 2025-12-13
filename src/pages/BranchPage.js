// src/pages/BranchPage.js
import React from "react";
import PropTypes from "prop-types";
import SubPageCard from "../components/SubPageCard";

export default function BranchPage({ branch }) {
  const ROUTES = {
    belina: {
      center: "center",
      workers: "workers",
      traders: "traders",
      sales: "sales-exhibition",
    },
    garga: {
      center: "center",
      workers: "workers-mall",
      traders: "traders-mall",
      sales: "sales-mall",
    },
    dalaa: {
      center: "center",
      workers: "workers",
      traders: "traders",
      sales: "sales",
    },
    seema: {
      center: "center",
      workers: "workers",
      traders: "traders",
      sales: "sales",
    },
    ghaza: {
      center: "center",
      workers: "workers",
      traders: "traders",
      sales: "sales",
    },
  };

  const r = ROUTES[branch.id];

  const pages = [
    {
      title: `${branch.name} — الحسابات الرئيسية`,
      desc: "سجلات عامة",
      route: `/branch/${branch.id}/${r.center}`,
      icon: "🏬",
    },
    {
      title: `حسابات عمال ${branch.name}`,
      desc: "مرتبات وسحوبات",
      route: `/branch/${branch.id}/${r.workers}`,
      icon: "👷",
    },
    {
      title: `حسابات التجار`,
      desc: "سجلات التجار والفواتير",
      route: `/branch/${branch.id}/${r.traders}`,
      icon: "🧾",
    },
    {
      title: `مبيعات ${branch.name}`,
      desc: "سجلات المبيعات",
      route: `/branch/${branch.id}/${r.sales}`,
      icon: "🛍️",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div className="header" style={{ marginBottom: 6 }}>
        <div>
          <div className="h-title">{branch.name}</div>
          <div className="h-sub">لوحة تحكم الفرع</div>
        </div>
      </div>

      <div className="subcards" style={{ marginBottom: 0, minHeight: "62vh" }}>
        {pages.map((p, i) => (
          <SubPageCard
            key={i}
            title={p.title}
            desc={p.desc}
            route={p.route}
            icon={p.icon}
            stats={[]}
          />
        ))}
      </div>
    </div>
  );
}

BranchPage.propTypes = {
  branch: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
