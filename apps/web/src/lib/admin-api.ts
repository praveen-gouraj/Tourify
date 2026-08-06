export function getAdminHeaders() {
  if (typeof window === "undefined") {
    return {};
  }

  const token = window.localStorage.getItem("traveller_admin_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}
