import { ButtonLink, Card, CardBody } from "./ui";

export function CtaBanner({
  title,
  description,
  primary,
  secondary
}: {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <Card className="overflow-hidden bg-navy-950 text-white">
      <CardBody className="p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-200">Ready when you are</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <ButtonLink href={primary.href} variant="secondary">
              {primary.label}
            </ButtonLink>
            {secondary ? (
              <ButtonLink href={secondary.href} variant="ghost" className="bg-white/10 text-white hover:bg-white/15">
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
