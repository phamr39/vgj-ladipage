"use client";

import { useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Dịch vụ", href: "#services" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Quy trình", href: "#process" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1f2129]/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex flex-col leading-tight">
            <span
              className="font-bold text-lg tracking-wider"
              style={{ color: "#d4a017", fontFamily: "'EB Garamond', serif" }}
            >
              VietinBank
            </span>
            <span className="text-xs text-white tracking-widest font-light uppercase">
              Gold &amp; Jewellery
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-[#d4a017] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block btn-gold text-sm py-2 px-5 rounded"
          style={{ padding: "8px 20px", fontSize: "13px" }}
        >
          Đặt tư vấn
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1f2129] border-t border-gray-700 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-gray-300 hover:text-[#d4a017] border-b border-gray-700 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 btn-gold text-center"
            onClick={() => setMobileOpen(false)}
          >
            Đặt tư vấn ngay
          </a>
        </div>
      )}
    </header>
  );
}
