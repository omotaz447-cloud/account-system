import React from "react";
import { Navigate } from "react-router-dom";
import { getLoggedUser } from "../services/auth";

export default function ProtectedRoute({ children, allowed }) {
  const user = getLoggedUser();

  if (!user) return <Navigate to="/login" replace />;

  // Admin can access everything
  if (user.allowedPage === "all") {
    return children;
  }

  // Check permission for normal users
  if (allowed && user.allowedPage !== allowed) {
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: 40 }}>
        ❌ غير مسموح لك بالدخول لهذه الصفحة
      </div>
    );
  }

  return children;
}
