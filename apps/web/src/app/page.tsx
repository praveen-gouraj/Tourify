import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { BookingForm } from "@/components/booking-form";
import { CtaBanner } from "@/components/cta-banner";
import {
  BulletList,
  DestinationCards,
  FaqCards,
  FleetCards,
  MotionSection,
  PackageCards,
  ServiceCards,
  StatsStrip,
  TestimonialCards
} from "@/components/content-sections";
import { PageHero } from "@/components/page-hero";
import { Card, CardBody, Container, SectionHeading, ButtonLink } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { destinations, faqs, packages, services, statistics, testimonials, fleetVehicles, whyChooseUs } from "@/data/site";

export default function HomePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Premium Travel Agency"
        title="Luxury travel and chauffeur services designed for clients who expect precision."
        description="Traveller blends premium fleet operations, curated holiday packages, and dependable airport transfers into one seamless travel experience."
        primaryCta={{ label: "Book Your Trip", href: "/contact" }}
        secondaryCta={{ label: "Explore Packages", href: "/tour-packages" }}
        image={{
          src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
          alt: "Luxury travel experience"
        }}
      />

      <section className="py-8">
        <Container>
          <StatsStrip items={statistics} />
        </Container>
      </section>

      <section className="py-10 lg:py-16">
        <Container>
          <BookingForm />
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <MotionSection>
            <SectionHeading
              eyebrow="Services"
              title="All the core travel services your client needs in one place"
              description="From airport pickups to corporate movement and outstation travel, every service is built around comfort, timing, and communication."
            />
          </MotionSection>
          <MotionSection>
            <ServiceCards items={services} />
          </MotionSection>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <MotionSection>
            <SectionHeading
              eyebrow="Destinations"
              title="Popular destinations curated for premium leisure travel"
              description="Every destination package is designed with reliable transfers, considered pacing, and refined hotel choices."
            />
          </MotionSection>
          <MotionSection>
            <DestinationCards items={destinations} />
          </MotionSection>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <MotionSection>
            <SectionHeading
              eyebrow="Packages"
              title="Tour packages built with real itinerary discipline"
              description="Move beyond generic holidays. These packages are structured for comfort, clarity, and a premium guest journey."
            />
          </MotionSection>
          <MotionSection>
            <PackageCards items={packages} />
          </MotionSection>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <MotionSection>
            <SectionHeading
              eyebrow="Fleet"
              title="Vehicle classes selected for the right trip, not just the right size"
              description="Each vehicle is prepared for customer-facing service standards, clean interiors, and comfortable long-distance travel."
            />
          </MotionSection>
          <MotionSection>
            <FleetCards items={fleetVehicles} />
          </MotionSection>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Card className="bg-navy-950 text-white">
            <CardBody className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-200">Why Traveller</p>
              <h2 className="mt-4 text-3xl font-semibold">A premium operating model built for peace of mind</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                We focus on operational consistency, quick communication, and a polished guest experience from first inquiry to final drop-off.
              </p>
              <div className="mt-8">
                <BulletList items={whyChooseUs} />
              </div>
            </CardBody>
          </Card>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardBody>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Fast response</div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Quote requests and booking confirmations are handled by a responsive operations team.
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Trusted fleet</div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Vehicles are selected, inspected, and assigned based on the passenger count and trip profile.
                </p>
              </CardBody>
            </Card>
            <Card className="sm:col-span-2 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1502920917128-1aa500764b9c?auto=format&fit=crop&w=1400&q=80"
                  alt="Premium car interior"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <MotionSection>
            <SectionHeading
              eyebrow="Testimonials"
              title="Guest feedback that reflects the standard we maintain"
              description="The service experience is designed to feel reliable, calm, and premium for every journey type."
            />
          </MotionSection>
          <MotionSection>
            <TestimonialCards items={testimonials} />
          </MotionSection>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <MotionSection>
            <SectionHeading
              eyebrow="FAQ"
              title="Important questions, answered clearly"
              description="Use this section to reduce friction before the customer books or enquires."
            />
          </MotionSection>
          <MotionSection>
            <FaqCards items={faqs} />
          </MotionSection>
        </Container>
      </section>

      <section className="py-8 lg:py-14">
        <Container>
          <CtaBanner
            title="Ready to plan a trip that feels effortless from the first message?"
            description="Share your travel details and Traveller will respond with a clear recommendation, an accurate quote, and the right vehicle for the journey."
            primary={{ label: "Contact Traveller", href: "/contact" }}
            secondary={{ label: "View Fleet", href: "/fleet" }}
          />
        </Container>
      </section>
    </SiteShell>
  );
}
