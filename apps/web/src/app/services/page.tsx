import { FaBus, FaCarSide, FaPlaneArrival, FaRoute, FaTaxi, FaUsers } from "react-icons/fa6";
import { Card, CardBody, Container, SectionHeading } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { ServiceCards, MotionSection } from "@/components/content-sections";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Every travel requirement covered with one premium booking partner."
        description="From airport transfers to luxury coach movement and corporate mobility, Traveller is designed to manage both routine and high-value travel needs."
        primaryCta={{ label: "Book Service", href: "/contact" }}
        image={{
          src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80",
          alt: "City travel service"
        }}
      />

      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <MotionSection>
            <SectionHeading eyebrow="Service list" title="Commercial travel services built for reliability and comfort" description="Each service can be tailored with fixed routes, custom stops, and higher-capacity vehicles where needed." />
          </MotionSection>
          <MotionSection>
            <ServiceCards items={services} />
          </MotionSection>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50/80">
        <Container className="space-y-10">
          <SectionHeading eyebrow="How it works" title="A clear operating flow for every booking" description="The booking process is structured to reduce friction and make approval easy for the client." />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { title: "Inquiry", description: "Share route, dates, passenger count, and preferences through the booking form." },
              { title: "Confirmation", description: "Our team reviews availability, recommends the right vehicle, and shares pricing." },
              { title: "Execution", description: "Drivers arrive on time, trip updates are communicated, and support remains active." }
            ].map((item) => (
              <Card key={item.title}>
                <CardBody>
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
