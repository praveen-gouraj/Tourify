"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { FiBarChart2, FiBriefcase, FiCamera, FiFolder, FiHome, FiInbox, FiLogOut, FiMessageSquare, FiSettings, FiStar, FiTruck } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { Button } from "./ui";

const adminNavigation = [
  { label: "Dashboard", href: "/admin", icon: FiBarChart2 },
  { label: "Bookings", href: "/admin/bookings", icon: FiInbox },
  { label: "Packages", href: "/admin/packages", icon: FiBriefcase },
  { label: "Fleet", href: "/admin/fleet", icon: FiTruck },
  { label: "Testimonials", href: "/admin/testimonials", icon: FiStar },
  { label: "FAQs", href: "/admin/faqs", icon: FiSettings },
  { label: "Enquiries", href: "/admin/enquiries", icon: FiMessageSquare },
  { label: "Gallery", href: "/admin/gallery", icon: FiCamera }
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/admin/login";

  const signOut = () => {
    window.localStorage.removeItem("traveller_admin_token");
    router.push("/admin/login");
  };

  if (isLoginPage) {
    return <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.08),_transparent_30%)]">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/admin" className="flex items-center gap-3 text-lg font-semibold text-navy-950">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-navy-900 text-sm font-bold text-white">T</span>
            Traveller Admin
          </Link>
          <Button type="button" variant="ghost" onClick={signOut} className="hidden md:inline-flex">
            <FiLogOut /> Sign Out
          </Button>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft lg:sticky lg:top-28 lg:h-fit">
          <nav className="space-y-2">
            {adminNavigation.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                    active ? "bg-navy-900 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-navy-900"
                  )}
                >
                  <Icon />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Button type="button" variant="ghost" onClick={signOut} className="mt-4 w-full justify-center md:hidden">
            <FiLogOut /> Sign Out
          </Button>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
