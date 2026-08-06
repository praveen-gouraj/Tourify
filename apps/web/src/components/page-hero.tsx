"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink, Container } from "./ui";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: { src: string; alt: string };
}) {
  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 max-w-3xl">
          <div className="section-badge">{eyebrow}</div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="ghost">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-hero-gradient opacity-10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-soft">
            <Image src={image.src} alt={image.alt} width={1200} height={900} className="h-[420px] w-full object-cover lg:h-[560px]" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
              <div className="rounded-2xl border border-white/20 bg-white/15 px-4 py-3 text-sm text-white backdrop-blur-xl">
                24/7 chauffeur support
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/15 px-4 py-3 text-sm text-white backdrop-blur-xl">
                Premium fleet and curated tours
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
