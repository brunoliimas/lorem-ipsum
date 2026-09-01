import { SpeedInsights } from '@vercel/speed-insights/next'
import MaintenancePage from '../../components/MaintenancePage'
import { PageTransition } from '../../components/PageTransition'
import { ScrollProgressBar } from '../../components/ScrollProgressBar'
import { SiteLoader } from '../../components/SiteLoader'
import { isMaintenanceMode } from '../../lib/maintenance'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const maintenance = isMaintenanceMode()

  return (
    <>
      {maintenance ? <MaintenancePage /> : children}

      {!maintenance && (
        <>
          <SiteLoader />
          <ScrollProgressBar />
          <PageTransition />
          <SpeedInsights />
        </>
      )}
    </>
  )
}
