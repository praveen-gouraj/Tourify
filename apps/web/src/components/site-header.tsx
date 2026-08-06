"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { primaryNavigation, siteName } from "@traveller/shared/nav";
import { ButtonLink, Container } from "./ui";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/85 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-navy-950">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-navy-900 text-sm font-bold text-white">T</span>
          {siteName}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-slate-600 hover:text-navy-900",
                pathname === item.href && "text-navy-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/contact" variant="ghost">
            Get Quote
          </ButtonLink>
          <ButtonLink href="/contact">Book Now</ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-navy-900 lg:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="space-y-4 py-4">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contact" className="w-full justify-center" onClick={() => setOpen(false)}>
              Book Now
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
