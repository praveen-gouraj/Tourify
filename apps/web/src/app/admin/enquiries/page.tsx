import { ResourceManager } from "../../../components/resource-manager";
import { adminResources } from "../../../data/admin-resources";

export default function AdminEnquiriesPage() {
  return <ResourceManager {...adminResources.enquiries} />;
}
