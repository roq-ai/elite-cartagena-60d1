const mapping: Record<string, string> = {
  bookings: 'booking',
  experiences: 'experience',
  organizations: 'organization',
  renamedpackages: 'Renamedpackage',
  profiles: 'profile',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
