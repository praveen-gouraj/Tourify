import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { galleryItems } from "@/data/site";

export default function GalleryPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Gallery"
        title="A visual snapshot of the Traveller experience."
        description="The gallery highlights the vehicles, road journeys, and comfort-first approach that shape the brand."
        primaryCta={{ label: "Request Booking", href: "/contact" }}
        image={{
          src: galleryItems[0].src,
          alt: galleryItems[0].alt
        }}
      />
      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <SectionHeading eyebrow="Moments" title="Travel visuals with strong editorial framing" description="Images should reinforce the premium positioning and the operational quality of the fleet and service." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {galleryItems.map((item) => (
              <div key={item.alt} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-200 shadow-soft">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
