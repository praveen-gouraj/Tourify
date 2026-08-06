import { Card, CardBody, Container, SectionHeading } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { DetailPage } from "@/components/detail-page";

export default function AirportTaxiPage() {
  return (
    <SiteShell>
      <DetailPage
        hero={{
          eyebrow: "Airport Taxi",
          title: "Airport transfers with timing discipline and premium guest handling.",
          description: "Choose Traveller for accurate pickup coordination, flight-aware dispatching, and clean executive cars for every airport journey.",
          image: {
            src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
            alt: "Airport taxi service"
          }
        }}
        intro={{ title: "Reliable transfer management from curb to terminal" }}
        highlights={[
          "Flight tracking before pickup",
          "Meet-and-greet support",
          "Luggage-friendly vehicle selection",
          "24/7 dispatch and communication"
        ]}
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Departure transfer", "Leave home with enough buffer time and real-time route awareness."],
            ["Arrival pickup", "Your driver receives flight updates and waits according to your landing time."],
            ["Business travel", "Quiet, dependable rides ideal for executives and frequent flyers."]
          ].map(([title, description]) => (
            <Card key={title}>
              <CardBody>
                <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </DetailPage>
    </SiteShell>
  );
}
