import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

/**
 * لا نفعل الثيم هنا افتراضياً — App.js سيتحكم في التطبيق بالكامل.
 * لكن لنحافظ على تهيئة آمنة (SSR) نتأكد من وجود document قبل استخدامه.
 * إذا كان في localStorage قيمة محفوظة سيتم تطبيقها فور تحميل الصفحة
 * لتفادي فلاش عند التحميل (FOUT) نخضع لتطبيقها هنا إن وجدت.
 */
if (typeof document !== "undefined") {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  } catch (e) {
    // localStorage ممكن يقفل في بعض البيئات — نتجاهل الخطأ بأمان
  }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
