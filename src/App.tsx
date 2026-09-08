import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'

/* Chargement différé des pages (code-splitting) */
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Services = lazy(() => import('@/pages/Services'))
const Ophthalmology = lazy(() => import('@/pages/Ophthalmology'))
const Dentistry = lazy(() => import('@/pages/Dentistry'))
const Imaging = lazy(() => import('@/pages/Imaging'))
const Explorations = lazy(() => import('@/pages/Explorations'))
const Laboratory = lazy(() => import('@/pages/Laboratory'))
const Team = lazy(() => import('@/pages/Team'))
const DoctorProfile = lazy(() => import('@/pages/DoctorProfile'))
const Achievements = lazy(() => import('@/pages/Achievements'))
const Blog = lazy(() => import('@/pages/Blog'))
const Article = lazy(() => import('@/pages/Article'))
const Products = lazy(() => import('@/pages/Products'))
const ProductDetail = lazy(() => import('@/pages/ProductDetail'))
const Contact = lazy(() => import('@/pages/Contact'))
const Emergency = lazy(() => import('@/pages/Emergency'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function Placeholder({ title }: { title: string }) {
  return (
    <div className="section">
      <div className="section-narrow">
        <h1>{title}</h1>
        <p className="mt-4 text-mist">Page en cours de construction.</p>
      </div>
    </div>
  )
}

function PageLoader() {
  return (
    <div className="section flex items-center justify-center" role="status" aria-live="polite">
      <p className="text-sm text-mist">Chargement…</p>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="a-propos" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/ophtalmologie" element={<Ophthalmology />} />
          <Route path="services/dentisterie" element={<Dentistry />} />
          <Route path="services/imagerie" element={<Imaging />} />
          <Route path="services/explorations" element={<Explorations />} />
          <Route path="services/laboratoire" element={<Laboratory />} />
          <Route path="equipe" element={<Team />} />
          <Route path="equipe/:slug" element={<DoctorProfile />} />
          <Route path="realisations" element={<Achievements />} />
          <Route path="actualites" element={<Blog />} />
          <Route path="actualites/:slug" element={<Article />} />
          <Route path="produits" element={<Products />} />
          <Route path="produits/:slug" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="urgences" element={<Emergency />} />
          <Route path="mentions-legales" element={<Placeholder title="Mentions légales" />} />
          <Route path="confidentialite" element={<Placeholder title="Confidentialité" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}