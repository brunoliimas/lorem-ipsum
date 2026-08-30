export function isMaintenanceMode(): boolean {
  return process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
}
