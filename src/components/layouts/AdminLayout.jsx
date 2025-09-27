import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../_dashboard/Sidebar";

export default function AdminLayout() {
  return (
    <div className="flex bg-[#f2f4f7] min-h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full bg-white shadow-lg z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-72 z-0 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}
