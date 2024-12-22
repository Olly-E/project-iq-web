import React from "react";
import Navbar from "../layout/Navbar";

import { Footer } from "../layout/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
      <div id="modal-root" />
    </div>
  );
}
