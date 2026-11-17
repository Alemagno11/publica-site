"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, navRight } from "@/content/site";
import Wordmark from "./Wordmark";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 mix-blend-difference text-white">
        <div className="flex items-center justify-between px-6 py-6 md:px-12">
          <Link
            href="/"
            aria-label="PubliCa — início"
            className="text-base tracking-tight md:text-lg"
          >
            <Wordmark />
          </Link>

          <nav className="hidden items-center gap-8 text-lg md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={navRight.href}
            className="hidden text-lg transition-opacity hover:opacity-60 md:block"
          >
            {navRight.label}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-6 w-7 cursor-pointer flex-col justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-px w-full bg-white transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-white transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 z-40 bg-ink text-paper transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-6">
          {[...nav, navRight].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-5xl font-medium tracking-tight"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
