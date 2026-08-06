import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container, Card, CardBody, SectionHeading, ButtonLink } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { DetailPage } from "@/components/detail-page";
import { packages } from "@/data/site";

export function generateStaticParams() {
  return packages.map((travelPackage) => ({ slug: travelPackage.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const travelPackage = packages.find((item) => item.slug === params.slug);
  if (!travelPackage) {
    return { title: "Package Not Found | Traveller" };
  }

  return {
    title: `${travelPackage.title} | Traveller`,
    description: travelPackage.overview
  };
}

export default function PackageDetailPage({ params }: { params: { slug: string } }) {
  const travelPackage = packages.find((item) => item.slug === params.slug);

  if (!travelPackage) {
    notFound();
  }

  const relatedPackages = packages.filter((item) => item.slug !== travelPackage.slug).slice(0, 2);

  return (
    <SiteShell>
      <DetailPage
        hero={{
          eyebrow: travelPackage.destination,
          title: travelPackage.title,
          description: travelPackage.overview,
          image: {
            src: travelPackage.heroImage.url,
            alt: travelPackage.heroImage.alt
          }
        }}
        intro={{ title: `${travelPackage.duration} curated travel with clear inclusions` }}
        highlights={travelPackage.included}
        cta={<ButtonLink href="/contact">Book Now</ButtonLink>}
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardBody>
              <SectionHeading eyebrow="Itinerary" title="Daily plan" description="A clear route structure helps customers understand what the package delivers." />
              <div className="mt-6 space-y-4">
                {travelPackage.itinerary.map((item) => (
                  <div key={item.day} className="rounded-2xl border border-slate-200 p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">{item.day}</div>
                    <h3 className="mt-2 text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardBody>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Package price</div>
                <div className="mt-3 text-4xl font-semibold text-navy-950">INR {travelPackage.price.toLocaleString()}</div>
                <p className="mt-3 text-sm text-slate-600">{travelPackage.duration}</p>
                <ButtonLink href="/contact" className="mt-6 w-full">
                  Enquire About This Trip
                </ButtonLink>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <SectionHeading eyebrow="Gallery" title="Package highlights" />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {travelPackage.gallery.map((image) => (
                    <div key={image.alt} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image src={image.url} alt={image.alt} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardBody>
              <SectionHeading eyebrow="Included" title="What is covered" />
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {travelPackage.included.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <SectionHeading eyebrow="Excluded" title="What is not covered" />
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {travelPackage.excluded.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </div>

        <div>
          <SectionHeading eyebrow="Related Packages" title="Other curated trips worth reviewing" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {relatedPackages.map((item) => (
              <Card key={item.slug} className="overflow-hidden">
                <div className="relative h-52">
                  <Image src={item.heroImage.url} alt={item.heroImage.alt} fill className="object-cover" />
                </div>
                <CardBody>
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.destination}</p>
                  <ButtonLink href={`/tour-packages/${item.slug}`} variant="ghost" className="mt-5 px-0">
                    View Package
                  </ButtonLink>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </DetailPage>
    </SiteShell>
  );
}
