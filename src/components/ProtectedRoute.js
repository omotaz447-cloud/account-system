import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { getLoggedUser } from "../services/auth";

export default function ProtectedRoute({ children, allowed }) {
  const user = getLoggedUser();

  // not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // admin can access everything
  if (user.allowedPage === "all") {
    return children;
  }

  // restricted user
  if (allowed && user.allowedPage !== allowed) {
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: 40 }}>
        ❌ غير مسموح لك بالدخول إلى هذه الصفحة
      </div>
    );
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowed: PropTypes.string,
};