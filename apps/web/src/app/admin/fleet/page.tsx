import { ResourceManager } from "../../../components/resource-manager";
import { adminResources } from "../../../data/admin-resources";

export default function AdminFleetPage() {
  return <ResourceManager {...adminResources.fleet} />;
}
