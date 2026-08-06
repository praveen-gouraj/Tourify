import { Card, CardBody, Container, SectionHeading } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { DetailPage } from "@/components/detail-page";

export default function LocalTaxiPage() {
  return (
    <SiteShell>
      <DetailPage
        hero={{
          eyebrow: "Local Taxi",
          title: "Hourly and point-to-point local travel with polished chauffeur service.",
          description: "Use Traveller for city meetings, shopping trips, family movement, and flexible transport that stays on schedule.",
          image: {
            src: "https://images.unsplash.com/photo-1511527844068-006b95d162c2?auto=format&fit=crop&w=1400&q=80",
            alt: "Local taxi service"
          }
        }}
        intro={{ title: "Built for city movement that needs flexibility" }}
        highlights={[
          "Flexible hourly booking",
          "Multi-stop city routes",
          "Professional chauffeur support",
          "Transparent, client-friendly pricing"
        ]}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            ["Business mobility", "Meetings, site visits, and fast city movement with punctual pickups."],
            ["Family movement", "Comfortable cars for market runs, events, and family outings."],
            ["Custom itinerary", "Create a route plan with multiple stops and waiting time included."],
            ["Daily hire", "Book by the hour for predictable service windows."]
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
