// src/App.js
import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ProtectedRoute from "./components/ProtectedRoute";

import BranchPage from "./pages/BranchPage";
import LoginPage from "./pages/Login";

import { initSampleData, listBranches } from "./services/storage";
import { logout, getLoggedUser } from "./services/auth";

/* ----------- BELINA ----------- */
import BelinaWorkers from "./pages/belina/BelinaWorkers";
import BelinaExhibition from "./pages/belina/BelinaExhibition";
import BelinaTraders from "./pages/belina/BelinaTraders";
import BelinaSales from "./pages/belina/BelinaSales";
import BelinaBaika from "./pages/belina/BelinaBaika";
import BelinaMahmoud from "./pages/belina/BelinaMahmoud";
import BelinaWahid from "./pages/belina/BelinaWahid";

/* ----------- GARGA ----------- */
import GargaTradersMall from "./pages/garga/GargaTradersMall";
import GargaWorkersMall from "./pages/garga/GargaWorkersMall";
import GargaExhibitionMall from "./pages/garga/GargaExhibitionMall";
import GargaSalesMall from "./pages/garga/GargaSalesMall";
import GargaBaika from "./pages/garga/GargaBaika";
import GargaMahmoud from "./pages/garga/GargaMahmoud";
import GargaWahid from "./pages/garga/GargaWahid";

/* ----------- DALAA ----------- */
import DalaaWorkers from "./pages/dalaa/DalaaWorkers";
import DalaaTraders from "./pages/dalaa/DalaaTraders";
import DalaaCenter from "./pages/dalaa/DalaaCenter";
import DalaaSales from "./pages/dalaa/DalaaSales";
import DalaaPrimary from "./pages/dalaa/DalaaPrimary";
import DalaaMahmoud from "./pages/dalaa/DalaaMahmoud";
import DalaaWahid from "./pages/dalaa/DalaaWahid";
import DalaaBasem from "./pages/dalaa/DalaaBasem";
import DalaaEmad from "./pages/dalaa/DalaaEmad";

/* ----------- SEEMA ----------- */
import SeemaCenter from "./pages/seema/SeemaCenter";
import SeemaWorkers from "./pages/seema/SeemaWorkers";
import SeemaSales from "./pages/seema/SeemaSales";
import SeemaTraders from "./pages/seema/SeemaTraders";
import SeemaMain from "./pages/seema/SeemaMain";
import SeemaMilad from "./pages/seema/SeemaMilad";
import SeemaWahid from "./pages/seema/SeemaWahid";
import SeemaBasem from "./pages/seema/SeemaBasem";
import SeemaEmad from "./pages/seema/SeemaEmad";
import SeemaMena from "./pages/seema/SeemaMena";

/* ----------- GHAZA ----------- */
import GhazaSales from "./pages/ghaza/GhazaSales";
import GhazaCenter from "./pages/ghaza/GhazaCenter";
import GhazaTraders from "./pages/ghaza/GhazaTraders";
import GhazaWorkers from "./pages/ghaza/GhazaWorkers";
import GhazaMain from "./pages/ghaza/GhazaMain";
import GhazaMahmoud from "./pages/ghaza/GhazaMahmoud";
import GhazaWahid from "./pages/ghaza/GhazaWahid";
import GhazaBasemWahid from "./pages/ghaza/GhazaBasemWahid";
import GhazaMenaWahid from "./pages/ghaza/GhazaMenaWahid";
import GhazaBaika from "./pages/ghaza/GhazaBaika";

/* ---------- Init sample data (no empty catch) ---------- */
try {
  initSampleData();
} catch (e) {
  console.warn("initSampleData skipped");
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const branches = listBranches() || [];
  const user = getLoggedUser();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user && location.pathname !== "/login") {
      navigate("/login", { replace: true });
    }
  }, [user, location.pathname, navigate]);

  async function handleLogout() {
    await logout();
    navigate("/login", { replace: true });
  }

  const showTopbar = location.pathname !== "/login";

  return (
    <div
      className="app-root"
      dir="rtl"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      {showTopbar && <Topbar onLogout={handleLogout} />}

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {showTopbar && <Sidebar branches={branches} />}

        <main style={{ flex: 1, padding: 20, overflow: "auto" }}>
          <Routes>
            {/* LOGIN */}
            <Route path="/login" element={<LoginPage />} />

            {/* DEFAULT */}
            <Route path="/" element={<Navigate to="/branch/belina" replace />} />

            {/* BRANCH ROOT */}
            {branches.map((b) => (
              <Route
                key={b.id}
                path={`/branch/${b.id}`}
                element={
                  <ProtectedRoute allowed={b.id}>
                    <BranchPage branch={b} />
                  </ProtectedRoute>
                }
              />
            ))}

            {/* BELINA */}
            <Route path="/branch/belina/workers" element={<ProtectedRoute allowed="belina"><BelinaWorkers /></ProtectedRoute>} />
            <Route path="/branch/belina/republic-exhibition" element={<ProtectedRoute allowed="belina"><BelinaExhibition /></ProtectedRoute>} />
            <Route path="/branch/belina/traders" element={<ProtectedRoute allowed="belina"><BelinaTraders /></ProtectedRoute>} />
            <Route path="/branch/belina/sales-exhibition" element={<ProtectedRoute allowed="belina"><BelinaSales /></ProtectedRoute>} />
            <Route path="/branch/belina/baika" element={<ProtectedRoute allowed="belina"><BelinaBaika /></ProtectedRoute>} />
            <Route path="/branch/belina/mahmoud" element={<ProtectedRoute allowed="belina"><BelinaMahmoud /></ProtectedRoute>} />
            <Route path="/branch/belina/wahid" element={<ProtectedRoute allowed="belina"><BelinaWahid /></ProtectedRoute>} />

            {/* GARGA */}
            <Route path="/branch/garga/workers-mall" element={<ProtectedRoute allowed="garga"><GargaWorkersMall /></ProtectedRoute>} />
            <Route path="/branch/garga/traders-mall" element={<ProtectedRoute allowed="garga"><GargaTradersMall /></ProtectedRoute>} />
            <Route path="/branch/garga/exhibition-mall" element={<ProtectedRoute allowed="garga"><GargaExhibitionMall /></ProtectedRoute>} />
            <Route path="/branch/garga/sales-mall" element={<ProtectedRoute allowed="garga"><GargaSalesMall /></ProtectedRoute>} />
            <Route path="/branch/garga/baika" element={<ProtectedRoute allowed="garga"><GargaBaika /></ProtectedRoute>} />
            <Route path="/branch/garga/mahmoud" element={<ProtectedRoute allowed="garga"><GargaMahmoud /></ProtectedRoute>} />
            <Route path="/branch/garga/wahid" element={<ProtectedRoute allowed="garga"><GargaWahid /></ProtectedRoute>} />

            {/* DALAA */}
            <Route path="/branch/dalaa/workers" element={<ProtectedRoute allowed="dalaa"><DalaaWorkers /></ProtectedRoute>} />
            <Route path="/branch/dalaa/traders" element={<ProtectedRoute allowed="dalaa"><DalaaTraders /></ProtectedRoute>} />
            <Route path="/branch/dalaa/center" element={<ProtectedRoute allowed="dalaa"><DalaaCenter /></ProtectedRoute>} />
            <Route path="/branch/dalaa/sales" element={<ProtectedRoute allowed="dalaa"><DalaaSales /></ProtectedRoute>} />
            <Route path="/branch/dalaa/primary" element={<ProtectedRoute allowed="dalaa"><DalaaPrimary /></ProtectedRoute>} />
            <Route path="/branch/dalaa/mahmoud" element={<ProtectedRoute allowed="dalaa"><DalaaMahmoud /></ProtectedRoute>} />
            <Route path="/branch/dalaa/wahid" element={<ProtectedRoute allowed="dalaa"><DalaaWahid /></ProtectedRoute>} />
            <Route path="/branch/dalaa/basem" element={<ProtectedRoute allowed="dalaa"><DalaaBasem /></ProtectedRoute>} />
            <Route path="/branch/dalaa/emad" element={<ProtectedRoute allowed="dalaa"><DalaaEmad /></ProtectedRoute>} />

            {/* SEEMA */}
            <Route path="/branch/seema/center" element={<ProtectedRoute allowed="seema"><SeemaCenter /></ProtectedRoute>} />
            <Route path="/branch/seema/workers" element={<ProtectedRoute allowed="seema"><SeemaWorkers /></ProtectedRoute>} />
            <Route path="/branch/seema/sales" element={<ProtectedRoute allowed="seema"><SeemaSales /></ProtectedRoute>} />
            <Route path="/branch/seema/traders" element={<ProtectedRoute allowed="seema"><SeemaTraders /></ProtectedRoute>} />
            <Route path="/branch/seema/main" element={<ProtectedRoute allowed="seema"><SeemaMain /></ProtectedRoute>} />
            <Route path="/branch/seema/milad" element={<ProtectedRoute allowed="seema"><SeemaMilad /></ProtectedRoute>} />
            <Route path="/branch/seema/wahid" element={<ProtectedRoute allowed="seema"><SeemaWahid /></ProtectedRoute>} />
            <Route path="/branch/seema/basem" element={<ProtectedRoute allowed="seema"><SeemaBasem /></ProtectedRoute>} />
            <Route path="/branch/seema/emad" element={<ProtectedRoute allowed="seema"><SeemaEmad /></ProtectedRoute>} />
            <Route path="/branch/seema/mena" element={<ProtectedRoute allowed="seema"><SeemaMena /></ProtectedRoute>} />

            {/* GHAZA */}
            <Route path="/branch/ghaza/workers" element={<ProtectedRoute allowed="ghaza"><GhazaWorkers /></ProtectedRoute>} />
            <Route path="/branch/ghaza/center" element={<ProtectedRoute allowed="ghaza"><GhazaCenter /></ProtectedRoute>} />
            <Route path="/branch/ghaza/traders" element={<ProtectedRoute allowed="ghaza"><GhazaTraders /></ProtectedRoute>} />
            <Route path="/branch/ghaza/sales" element={<ProtectedRoute allowed="ghaza"><GhazaSales /></ProtectedRoute>} />
            <Route path="/branch/ghaza/main" element={<ProtectedRoute allowed="ghaza"><GhazaMain /></ProtectedRoute>} />
            <Route path="/branch/ghaza/mahmoud" element={<ProtectedRoute allowed="ghaza"><GhazaMahmoud /></ProtectedRoute>} />
            <Route path="/branch/ghaza/wahid" element={<ProtectedRoute allowed="ghaza"><GhazaWahid /></ProtectedRoute>} />
            <Route path="/branch/ghaza/basem_wahid" element={<ProtectedRoute allowed="ghaza"><GhazaBasemWahid /></ProtectedRoute>} />
            <Route path="/branch/ghaza/mena_wahid" element={<ProtectedRoute allowed="ghaza"><GhazaMenaWahid /></ProtectedRoute>} />
            <Route path="/branch/ghaza/baika" element={<ProtectedRoute allowed="ghaza"><GhazaBaika /></ProtectedRoute>} />

            {/* 404 */}
            <Route path="*" element={<div style={{ color: "#fff" }}>الصفحة غير موجودة</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
