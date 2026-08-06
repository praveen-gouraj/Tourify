import { Container, SectionHeading } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { FaqCards, MotionSection } from "@/components/content-sections";
import { faqs } from "@traveller/shared/content";

export default function FaqPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="FAQ"
        title="Direct answers to the questions most clients ask before booking."
        description="The FAQ page should reduce uncertainty and speed up the conversion process for premium travel enquiries."
        primaryCta={{ label: "Ask a Question", href: "/contact" }}
        image={{
          src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80",
          alt: "Travel planning discussion"
        }}
      />
      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <MotionSection>
            <SectionHeading eyebrow="Answers" title="Practical information presented clearly" description="Each answer is concise enough for a marketing site while still being helpful for real clients." />
          </MotionSection>
          <MotionSection>
            <FaqCards items={faqs} />
          </MotionSection>
        </Container>
      </section>
    </SiteShell>
  );
}
