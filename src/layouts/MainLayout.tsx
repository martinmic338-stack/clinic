import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SeoRouteEnforcer } from '@/components/Seo'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SeoRouteEnforcer />
      <Header />
      {/* pb-20 sur mobile pour laisser la place à la bottom bar (h-16 + marges) */}
      <main className="flex-1 pb-20 xl:pb-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
