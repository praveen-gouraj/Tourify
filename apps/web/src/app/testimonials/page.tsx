import { Container, SectionHeading } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { TestimonialCards, MotionSection } from "@/components/content-sections";
import { testimonials } from "@traveller/shared/content";

export default function TestimonialsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Testimonials"
        title="Guest feedback that reflects the service standard Traveller maintains."
        description="Traveller is designed to be dependable, clear, and premium enough for commercial use. The testimonials section supports that positioning."
        primaryCta={{ label: "Book Traveller", href: "/contact" }}
        image={{
          src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80",
          alt: "Happy travel customer"
        }}
      />
      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <MotionSection>
            <SectionHeading eyebrow="Reviews" title="What clients value most" description="Reliability, premium cars, professional communication, and smooth execution are the recurring themes." />
          </MotionSection>
          <MotionSection>
            <TestimonialCards items={testimonials} />
          </MotionSection>
        </Container>
      </section>
    </SiteShell>
  );
}
