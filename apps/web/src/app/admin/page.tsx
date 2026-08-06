"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { getAdminHeaders } from "@/lib/admin-api";
import { Card, CardBody, Container, SectionHeading } from "@/components/ui";

export default function AdminDashboardPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const response = await api.get("/dashboard/analytics", { headers: getAdminHeaders() });
      setData(response.data.data);
    };

    void load();
  }, []);

  return (
    <div className="space-y-8">
      <SectionHeading eyebrow="Dashboard" title="Traveller analytics and recent activity" description="Use this view to understand booking volume, enquiries, and the content surface at a glance." />
      <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-6">
        {[
          ["Packages", data?.counts?.packages ?? "—"],
          ["Fleet", data?.counts?.fleet ?? "—"],
          ["Bookings", data?.counts?.bookings ?? "—"],
          ["Testimonials", data?.counts?.testimonials ?? "—"],
          ["FAQs", data?.counts?.faqs ?? "—"],
          ["Enquiries", data?.counts?.enquiries ?? "—"]
        ].map(([label, value]) => (
          <Card key={label as string}>
            <CardBody>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</div>
              <div className="mt-3 text-3xl font-semibold text-navy-950">{value}</div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardBody>
            <h2 className="text-xl font-semibold text-slate-950">Recent bookings</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              {data?.recentBookings?.length ? data.recentBookings.map((item: any) => <div key={item._id} className="rounded-2xl border border-slate-200 p-4">{item.name} - {item.destination}</div>) : <p>No bookings yet.</p>}
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h2 className="text-xl font-semibold text-slate-950">Recent enquiries</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              {data?.recentEnquiries?.length ? data.recentEnquiries.map((item: any) => <div key={item._id} className="rounded-2xl border border-slate-200 p-4">{item.name} - {item.service}</div>) : <p>No enquiries yet.</p>}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
