import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { officeAddress, supportEmail, supportPhone, whatsappLink, siteName } from "@traveller/shared";
import { primaryNavigation } from "@traveller/shared/nav";
import { Container } from "./ui";

const socials = [
  { label: "WhatsApp", href: whatsappLink, icon: FaWhatsapp },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/80">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <div className="text-2xl font-semibold text-navy-950">{siteName}</div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Premium airport transfers, taxi services, chauffeur-driven fleet bookings, and curated holiday packages built for clients who expect consistency and comfort.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-600">
            <p>{officeAddress}</p>
            <p>{supportPhone}</p>
            <p>{supportEmail}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-navy-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Connect</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:text-navy-900"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </Container>

      <div className="border-t border-slate-200">
        <Container className="flex flex-col gap-3 py-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Traveller. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-navy-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-navy-900">
              Terms
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
