import React from "react";
import Navbar from "../layout/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white relative">
      <Navbar />
      {children}
      <div id="modal-root" />
    </div>
  );
}
