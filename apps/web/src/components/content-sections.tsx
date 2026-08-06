"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheck, FiClock, FiMapPin, FiStar } from "react-icons/fi";
import { FaBus, FaCarSide, FaPlaneArrival, FaRoute, FaTaxi, FaUsers } from "react-icons/fa6";
import type { ReactNode } from "react";
import type { FaqItem, FleetVehicle, Testimonial, TravelPackage } from "@traveller/shared";
import { ButtonLink, Card, CardBody, SectionHeading } from "./ui";

export function StatsStrip({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <Card key={item.label} className="glass-panel">
          <CardBody>
            <div className="text-3xl font-semibold text-navy-950">{item.value}</div>
            <p className="mt-2 text-sm text-slate-600">{item.label}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export function ServiceCards({ items }: { items: { title: string; description: string; href: string; icon?: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-glass">
          <CardBody>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-2xl text-navy-900 transition group-hover:bg-accent-50 group-hover:text-accent-700">
              {(() => {
                const iconMap: Record<string, React.ComponentType<any>> = {
                  FaPlaneArrival,
                  FaTaxi,
                  FaRoute,
                  FaUsers,
                  FaCarSide,
                  FaBus
                };
                const Icon = item.icon ? iconMap[item.icon] : null;
                return Icon ? <Icon /> : null;
              })()}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            <Link href={item.href} className="mt-6 inline-flex text-sm font-semibold text-accent-700">
              Explore service
            </Link>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export function DestinationCards({ items }: { items: { title: string; description: string; image: string; href: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="overflow-hidden">
          <div className="relative h-56">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
          </div>
          <CardBody>
            <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            <ButtonLink href={item.href} variant="ghost" className="mt-6 px-0">
              View package
            </ButtonLink>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export function PackageCards({ items }: { items: TravelPackage[] }) {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {items.map((item) => (
        <Card key={item.slug} className="overflow-hidden">
          <div className="relative h-60">
            <Image src={item.heroImage.url} alt={item.heroImage.alt} fill className="object-cover" />
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900">
              {item.duration}
            </div>
          </div>
          <CardBody>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.destination}</p>
              </div>
              <div className="text-right text-sm font-semibold text-accent-700">INR {item.price.toLocaleString()}</div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.overview}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-1">{item.difficulty}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">Private transfers</span>
            </div>
            <ButtonLink href={`/tour-packages/${item.slug}`} className="mt-6 w-full">
              View Package
            </ButtonLink>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export function FleetCards({ items }: { items: FleetVehicle[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Card key={item.slug} className="overflow-hidden">
          <div className="relative h-56">
            <Image src={item.image.url} alt={item.image.alt} fill className="object-cover" />
          </div>
          <CardBody>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-950">{item.name}</h3>
                <p className="text-sm text-slate-500">{item.capacity}</p>
              </div>
              <div className="text-sm font-semibold text-accent-700">{item.price}</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {item.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <FiCheck className="text-accent-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" className="mt-6 w-full">
              Book Vehicle
            </ButtonLink>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export function TestimonialCards({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      {items.map((item) => (
        <Card key={item.name} className="border-slate-200">
          <CardBody>
            <div className="flex items-center gap-1 text-accent-500">
              {Array.from({ length: item.rating }).map((_, index) => (
                <FiStar key={index} />
              ))}
            </div>
            <p className="mt-5 text-base leading-8 text-slate-700">{item.message}</p>
            <div className="mt-6">
              <div className="font-semibold text-slate-950">{item.name}</div>
              <p className="text-sm text-slate-500">{item.location}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export function FaqCards({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <Card key={item.question}>
          <CardBody>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
              <FiClock /> {item.category}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.question}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export function PageIntro({ title, description }: { title: string; description: string }) {
  return <SectionHeading eyebrow="Traveller" title={title} description={description} />;
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-soft">
          <FiMapPin className="mt-1 text-accent-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function MotionSection({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
