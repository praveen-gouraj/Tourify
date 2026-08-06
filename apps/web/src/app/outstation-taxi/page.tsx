import { Card, CardBody } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { DetailPage } from "@/components/detail-page";

export default function OutstationTaxiPage() {
  return (
    <SiteShell>
      <DetailPage
        hero={{
          eyebrow: "Outstation Taxi",
          title: "Long-distance travel that balances comfort, value, and route planning.",
          description: "From weekend getaways to multi-day road journeys, Traveller offers dependable intercity rides with the right vehicle for the route.",
          image: {
            src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=80",
            alt: "Outstation taxi journey"
          }
        }}
        intro={{ title: "Intercity travel without operational surprises" }}
        highlights={[
          "Route-aware long-distance driving",
          "Transparent trip planning",
          "Comfort breaks and luggage support",
          "Vehicle choice matched to distance"
        ]}
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Weekend tours", "Great for short leisure trips and family escapes."],
            ["Business travel", "Dependable intercity travel for meetings and project visits."],
            ["Multi-day road trips", "Pre-planned movement with rest stops and support."],
            ["One-way transfers", "Efficient drop-only travel for city-to-city movement."],
            ["Round trips", "Return booking options for trips that end back at the origin."],
            ["Group travel", "Tempo Travellers and minibuses for longer routes."]
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
