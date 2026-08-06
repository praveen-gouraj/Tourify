import { ResourceManager } from "../../../components/resource-manager";
import { adminResources } from "../../../data/admin-resources";

export default function AdminFaqsPage() {
  return <ResourceManager {...adminResources.faqs} />;
}
