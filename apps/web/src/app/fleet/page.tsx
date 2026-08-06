import { Container, SectionHeading } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { FleetCards, MotionSection } from "@/components/content-sections";
import { fleetVehicles } from "@/data/site";

export default function FleetPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Vehicle Fleet"
        title="A carefully selected fleet of vehicles for every travel profile."
        description="From sedans for executive travel to luxury coaches for group transfers, Traveller keeps the fleet modern, polished, and passenger-ready."
        primaryCta={{ label: "Book Fleet", href: "/contact" }}
        image={{
          src: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=80",
          alt: "Fleet vehicle"
        }}
      />
      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <MotionSection>
            <SectionHeading eyebrow="Fleet" title="Choose the correct vehicle class for your distance and group size" description="Each card includes capacity, core features, and a clear starting price structure." />
          </MotionSection>
          <MotionSection>
            <FleetCards items={fleetVehicles} />
          </MotionSection>
        </Container>
      </section>
    </SiteShell>
  );
}
