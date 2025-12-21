// src/pages/Login.js
import React, { useState, useEffect } from "react";
import { loginWithEmail, getLoggedUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  // ====== Auto redirect if logged in ======
  useEffect(() => {
    try {
      const u = getLoggedUser();
      if (u) {
        navigate("/branch/belina", { replace: true });
      }
    } catch (e) {
      console.error("Auth error:", e);
    }
  }, [navigate]);

  // ====== Handle Submit ======
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    const res = await loginWithEmail(username.trim(), password);

    setLoading(false);

    if (!res.ok) {
      setErr("اسم المستخدم أو كلمة المرور غير صحيحة");
      return;
    }

    navigate("/branch/belina", { replace: true });
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>تسجيل الدخول</h2>
        <p>ادخل بياناتك للدخول إلى النظام</p>

        <input
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="البريد الإلكتروني"
          autoComplete="username"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة المرور"
          autoComplete="current-password"
        />

        {err && (
          <div style={{ marginTop: 12, color: "#ffb3b3", fontWeight: 600 }}>
            {err}
          </div>
        )}

        <button
          type="submit"
          className={`login-btn ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? "جاري..." : "دخول"}
        </button>
      </form>
    </div>
  );
}
