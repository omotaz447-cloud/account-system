// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getLoggedUser } from "../services/auth";

export default function ProtectedRoute({ children, allowed }) {
  const user = getLoggedUser();

  if (!user) return <Navigate to="/login" replace />;

  // Admin can access all
  if (user.allowedPage === "all") {
    return children;
  }

  // Normal user — check permission
  if (allowed && user.allowedPage !== allowed) {
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: 40 }}>
        ❌ ليس لديك صلاحية للدخول لهذه الصفحة
      </div>
    );
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  allowed: PropTypes.string
};
