import { Card, CardBody } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { DetailPage } from "@/components/detail-page";

export default function TempoTravellerPage() {
  return (
    <SiteShell>
      <DetailPage
        hero={{
          eyebrow: "Tempo Traveller",
          title: "Premium group travel with more space, more comfort, and less coordination friction.",
          description: "Ideal for families, wedding guests, and corporate teams who need seating flexibility and luggage capacity on the same trip.",
          image: {
            src: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1400&q=80",
            alt: "Tempo traveller vehicle"
          }
        }}
        intro={{ title: "Configured for larger groups without sacrificing comfort" }}
        highlights={[
          "High seating capacity",
          "Dedicated luggage space",
          "Group-friendly route planning",
          "Ideal for destination events"
        ]}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            ["Family trips", "Move relatives together with less coordination and fewer transfers."],
            ["Wedding logistics", "Keep guest groups together for venues, functions, and airport runs."],
            ["Corporate outings", "Transport teams efficiently for offsites and conferences."],
            ["Pilgrimage travel", "Comfortable long-route travel with stop planning and support."]
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
