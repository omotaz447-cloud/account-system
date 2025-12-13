// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../services/auth";

/**
 * الاستخدام:
 * <Route path="/branch/:id/*" element={<ProtectedRoute><BranchPage/></ProtectedRoute>} />
 */
export default function ProtectedRoute({ children }) {
  const u = getCurrentUser();
  if (!u) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
