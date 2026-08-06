import { Container, SectionHeading } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { PackageCards, MotionSection } from "@/components/content-sections";
import { packages } from "@/data/site";

export default function TourPackagesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Tour Packages"
        title="Curated travel programs with real itinerary structure and premium transfers."
        description="Select a package that reflects the pace, style, and comfort level your client expects. Every option is built to feel commercially ready."
        primaryCta={{ label: "Enquire Now", href: "/contact" }}
        image={{
          src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
          alt: "Travel package destination"
        }}
      />

      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <MotionSection>
            <SectionHeading eyebrow="Packages" title="Choose from premium holiday concepts and bespoke circuit plans" description="Open a package to view the itinerary, inclusions, exclusions, and related recommendations." />
          </MotionSection>
          <MotionSection>
            <PackageCards items={packages} />
          </MotionSection>
        </Container>
      </section>
    </SiteShell>
  );
}
