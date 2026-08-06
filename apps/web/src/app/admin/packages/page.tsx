import { ResourceManager } from "../../../components/resource-manager";
import { adminResources } from "../../../data/admin-resources";

export default function AdminPackagesPage() {
  return <ResourceManager {...adminResources.packages} />;
}
