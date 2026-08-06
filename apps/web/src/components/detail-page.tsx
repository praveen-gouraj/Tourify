import { Card, CardBody, Container, SectionHeading } from "./ui";
import { PageHero } from "./page-hero";
import { BulletList, MotionSection } from "./content-sections";
import type { ReactNode } from "react";

export function DetailPage({
  hero,
  intro,
  highlights,
  children,
  cta
}: {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: { src: string; alt: string };
  };
  intro: {
    eyebrow?: string;
    title: string;
    description?: string;
  };
  highlights?: string[];
  children?: ReactNode;
  cta?: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} image={hero.image} primaryCta={{ label: "Book Now", href: "/contact" }} secondaryCta={{ label: "View Packages", href: "/tour-packages" }} />
      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <SectionHeading eyebrow={intro.eyebrow ?? "Overview"} title={intro.title} description={intro.description} />
          {highlights ? <BulletList items={highlights} /> : null}
          {children}
          {cta ? <div className="pt-2">{cta}</div> : null}
        </Container>
      </section>
    </>
  );
}
