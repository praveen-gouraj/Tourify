import { Card, CardBody, Container, SectionHeading } from "./ui";
import { PageHero } from "./page-hero";
import type { ReactNode } from "react";

export function PolicyPage({
  title,
  description,
  sections
}: {
  title: string;
  description: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        description={description}
        image={{
          src: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1400&q=80",
          alt: "Travel policy"
        }}
        primaryCta={{ label: "Contact Support", href: "/contact" }}
      />
      <section className="py-16 lg:py-20">
        <Container className="space-y-8">
          <SectionHeading eyebrow="Policy details" title="Clear terms for service and privacy" description="These sections are written for a commercial website and can be adjusted once the final legal review is completed." />
          <div className="grid gap-6 lg:grid-cols-2">
            {sections.map((section) => (
              <Card key={section.heading}>
                <CardBody>
                  <h2 className="text-xl font-semibold text-slate-950">{section.heading}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
