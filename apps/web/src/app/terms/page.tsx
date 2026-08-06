import { SiteShell } from "@/components/site-shell";
import { PolicyPage } from "@/components/policy-page";
import { policySections } from "@/data/site";

export default function TermsPage() {
  return (
    <SiteShell>
      <PolicyPage
        title="Terms and Conditions"
        description="These terms outline the service, booking, and cancellation rules that apply to Traveller reservations."
        sections={policySections.terms}
      />
    </SiteShell>
  );
}
