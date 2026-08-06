import { SiteShell } from "@/components/site-shell";
import { PolicyPage } from "@/components/policy-page";
import { policySections } from "@/data/site";

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <PolicyPage
        title="Privacy Policy"
        description="This policy explains how Traveller handles booking, enquiry, and support information on a commercial travel website."
        sections={policySections.privacy}
      />
    </SiteShell>
  );
}
