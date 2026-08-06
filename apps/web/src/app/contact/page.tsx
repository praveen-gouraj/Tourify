import { Card, CardBody, Container, SectionHeading } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { siteDetails } from "@/data/site";

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation with a team that responds like a business, not a lead form."
        description="Use the form, map, or direct contact details below to request quotes, package assistance, or fleet availability."
        primaryCta={{ label: "Send Enquiry", href: "#contact-form" }}
        image={{
          src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
          alt: "Customer support and travel planning"
        }}
      />

      <section className="py-16 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            {[
              ["Office Address", siteDetails.officeAddress],
              ["Phone", siteDetails.supportPhone],
              ["Email", siteDetails.supportEmail],
              ["Business Hours", "Monday to Sunday, 7:00 AM to 11:00 PM"]
            ].map(([label, value]) => (
              <Card key={label}>
                <CardBody>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{value}</p>
                </CardBody>
              </Card>
            ))}
          </div>
          <div id="contact-form">
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="pb-16 lg:pb-20">
        <Container>
          <Card className="overflow-hidden">
            <iframe
              title="Office location map"
              src={siteDetails.mapUrl}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </Container>
      </section>
    </SiteShell>
  );
}
