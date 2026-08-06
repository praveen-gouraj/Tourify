import { ResourceManager } from "../../../components/resource-manager";
import { adminResources } from "../../../data/admin-resources";

export default function AdminBookingsPage() {
  return <ResourceManager {...adminResources.bookings} />;
}
