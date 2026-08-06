import { Card, CardBody, Container, SectionHeading } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { aboutMilestones, aboutStory } from "@/data/site";

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About Traveller"
        title="Built to deliver premium travel experiences with operational discipline."
        description="Traveller is a travel and mobility company focused on dependable fleet service, curated packages, and a high-touch client experience for leisure and business journeys."
        primaryCta={{ label: "Book Now", href: "/contact" }}
        image={{
          src: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=80",
          alt: "Travel team planning a trip"
        }}
      />

      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <SectionHeading eyebrow="Company" title="A commercial travel brand grounded in service quality" description="The company exists to make premium transport and travel planning feel clear, dependable, and refined." />
          <div className="grid gap-6 lg:grid-cols-2">
            {aboutStory.map((paragraph) => (
              <Card key={paragraph}>
                <CardBody>
                  <p className="text-sm leading-7 text-slate-600">{paragraph}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50/80">
        <Container className="space-y-10">
          <SectionHeading eyebrow="Achievements" title="The operating standard behind the brand" description="These milestones reflect the service and reliability expectations Traveller is built around." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutMilestones.map((item) => (
              <Card key={item.label}>
                <CardBody>
                  <div className="text-4xl font-semibold text-navy-950">{item.value}</div>
                  <p className="mt-3 text-sm text-slate-600">{item.label}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
